# `pulldown-cmark` JS-WASM Wrapper

A JavaScript WebAssembly wrapper for the [`pulldown-cmark`](https://github.com/raphlinus/pulldown-cmark) library.

## 🚀 Usage

### Basic:

```ts
import { parse } from "pulldown-cmark";

parse("# Hello world!");
```

### With Manual Initialization:
if your bundler does not support WebAssembly (WASM) out of the box, use the init function to manually initialize the WASM module.

```ts
import init, { parse } from "pulldown-cmark/init";

await init()

parse("# Hello world!");
```

### 🔧 Configuration

#### Vite

Enable WASM in Vite by importing and configuring the required plugins.

```ts
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
});
```

#### Webpack:

Enable WASM in Webpack by adjusting the experiments configuration.

```ts
module.exports = {
  //... (other config properties)
  experiments: {
    asyncWebAssembly: true,
    layers: true,
    topLevelAwait: true,
  },
};
```