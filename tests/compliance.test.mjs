import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const index = readFileSync(join(root, 'index.html'), 'utf8');
const terms = readFileSync(join(root, 'terms.html'), 'utf8');
const support = readFileSync(join(root, 'support.html'), 'utf8');
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const publicHtml = [index, terms, support];

test('Vercel serves the privacy view only from the explicit privacy rewrite', () => {
  assert.deepEqual(vercel.rewrites, [
    { source: '/privacy', destination: '/index.html' },
    { source: '/terms', destination: '/terms.html' },
    { source: '/support', destination: '/support.html' },
    { source: '/delete-account', destination: '/support.html' },
  ]);
  assert.ok(
    index.includes('location.pathname.replace(/\\/$/, "") === "/privacy"'),
  );
  assert.match(index, /Privacy Policy — Nay Thit/);
});

test('support and terms routes contain release-required user controls', () => {
  assert.match(terms, /AI-assisted summaries/);
  assert.match(terms, /Google Play before purchase/);
  assert.match(support, /id="delete-account"/);
  assert.match(support, /Request account deletion/);
  assert.match(support, /Deleting the Nay Thit account does not itself control Google Play billing/);
  assert.match(support, /swa\.developer\.expert@gmail\.com/);
});

test('privacy policy reflects the implemented data providers and controls', () => {
  for (const disclosure of [
    'Supabase Auth',
    'Google Sign-In',
    'User Messaging Platform (UMP)',
    'Firebase Cloud Messaging',
    'RevenueCat',
    'Google Gemini',
    'Microsoft Azure AI Speech',
    'Railway',
    'Vercel',
    'does not currently include a separate product',
    'private profile images',
    'countries other than the one where you live',
  ]) {
    assert.ok(index.includes(disclosure), `Missing privacy disclosure: ${disclosure}`);
  }
  assert.doesNotMatch(index, /Before publication|must be reviewed against the app/i);
});

test('public pages contain no internal release drafting notes', () => {
  for (const html of publicHtml) {
    assert.doesNotMatch(
      html,
      /release owner|qualified counsel|before public launch|must be confirmed before public release/i,
    );
  }
});

test('app-ads uses the verified seller line and is served as root plain text', () => {
  assert.equal(existsSync(join(root, 'app-ads.txt')), true);
  assert.equal(
    readFileSync(join(root, 'app-ads.txt'), 'utf8'),
    'google.com, pub-1864447674722680, DIRECT, f08c47fec0942fa0\n',
  );
  assert.equal(vercel.rewrites.some(route => route.source.includes('app-ads')), false);
  const header = vercel.headers.find(rule => rule.source === '/app-ads.txt');
  assert.ok(header);
  assert.ok(header.headers.some(value => (
    value.key.toLowerCase() === 'content-type' &&
    value.value.toLowerCase().startsWith('text/plain')
  )));
});

test('all in-page navigation targets exist and external links use supported schemes', () => {
  const links = [...index.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
  for (const href of links) {
    const hash = href.startsWith('/#') ? href.slice(2) : href.startsWith('#') ? href.slice(1) : null;
    if (hash) {
      assert.match(index, new RegExp(`id="${hash}"`), `Missing anchor target: ${href}`);
      continue;
    }
    assert.ok(
      href === '/' || href === '/privacy' || href.startsWith('https://') || href.startsWith('mailto:'),
      `Unsupported or broken-looking link: ${href}`,
    );
  }
});
