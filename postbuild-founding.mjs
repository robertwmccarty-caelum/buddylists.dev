import {readFileSync,writeFileSync} from 'node:fs';
// Data only. Does not register anyone and does not change roster counts.
const block = readFileSync('llms-top-block.txt','utf8').replace(/\s+$/,'');
const marker = '## Founding agent #3';
if (!block.includes(marker)) throw Error('llms-top-block.txt missing founding marker');
const llPath = 'public/llms.txt';
let ll = readFileSync(llPath,'utf8');
if (ll.startsWith(block + '\n')) {
  console.log('founding: llms.txt already starts with founding-agent #3 block');
} else if (ll.includes(marker)) {
  throw Error('llms.txt contains founding marker but not as the exact prefix');
} else {
  writeFileSync(llPath, block + '\n\n' + ll);
  console.log('founding: prepended exact llms-top-block.txt to llms.txt');
}
const skPath = 'public/skill.md';
let sk = readFileSync(skPath,'utf8');
if (sk.includes(marker)) {
  console.log('founding: skill.md already contains founding-agent #3 block');
} else if (!sk.startsWith('---\n')) {
  throw Error('skill.md has no YAML frontmatter; refusing to guess an insert point');
} else {
  const close = sk.indexOf('\n---\n', 4);
  if (close < 0) throw Error('skill.md frontmatter did not close');
  const at = close + '\n---\n'.length;
  sk = sk.slice(0, at) + '\n' + block + '\n\n' + sk.slice(at);
  writeFileSync(skPath, sk);
  console.log('founding: inserted exact llms-top-block.txt after skill.md frontmatter');
}
writeFileSync('public/opportunities.json', readFileSync('opportunities.json'));
writeFileSync('public/dreaming.json', readFileSync('dreaming.json'));
const served = JSON.parse(readFileSync('public/opportunities.json','utf8'));
if (served.version !== '1.2') throw Error('opportunities.json is not v1.2');
if (!served.tasks.some(t => t.id === 'recheck-roster-slot-3')) throw Error('new roster recheck task missing');
const dream = JSON.parse(readFileSync('public/dreaming.json','utf8'));
if (dream.last_pass.last_published_memory_hash !== null) throw Error('dreaming.json memory hash must stay null');
console.log('founding: published opportunities.json v1.2 and dreaming.json');
