# Usage

```
npm install @evoluzione/tailwind-config
```

If you want to extend the existing config:

```js
// tailwind.config.js

module.exports = {
  presets: [require('@evoluzione/tailwind-config')],
  safelist: ['aspect-w-21', '...'],
};
```

If you want to use the config as is:

```js
// tailwind.config.js

module.exports = {
  presets: [require('@evoluzione/tailwind-config')],
};
```