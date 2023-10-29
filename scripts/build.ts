import { rimraf } from 'rimraf'
import { $ } from 'execa';

await rimraf('dist')
await rimraf('build')

await $`mkdir dist`;

// CJS
await $`wasm-pack build --target nodejs --weak-refs --release --out-dir build --out-name index`;

await $`cp build/index_bg.wasm dist/index_bg.wasm`;
await $`cp build/index_bg.wasm.d.ts dist/index_bg.wasm.d.ts`;
await $`cp build/index.js dist/index.cjs`;
await $`cp build/index.d.ts dist/index.d.ts`;

await rimraf('build')

// ESM + WASM (for bundlers)
await $`wasm-pack build --target bundler --weak-refs --release --out-dir build --out-name index`;

await $`cp build/index.js dist/index.js`;
await $`cp build/index_bg.js dist/index_bg.js`;

// ESM + WASM (for browsers)
await $`wasm-pack build --target web --weak-refs --release --out-dir build --out-name index`;

await $`cp build/index.js dist/init.js`;
await $`cp build/index.d.ts dist/init.d.ts`;

await rimraf('build')