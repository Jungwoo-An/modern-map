# Modern Map

This is simply, easily, able to limit, similar to pure object

## Getting started

```bash
# Install via npm
npm install modern-map

# Install via yarn (Recommend)
yarn add modern-map
```

## API Document

`Map.create<T>(limitSize?: number): Partial<T>`

Initialize function.

Parameters:

- limitSize (optional): Set limit size of modern-map. If not set, will be infinite size.

```js
const Map = require('modern-map')
const obj = Map.create()

// getter and setter is same as pure object

// set value
obj.key = value
// or
obj[key] = value

// get value
obj.key
// or
obj[key]
```

If you using typescript and want to set type of map.

```ts
interface Data {
  item1: number;
  item2: boolean;
}

const Map = require('modern-map')
const obj = Map.create<Data>() // return type is Partial<Data>

obj.item1 = 0;
```

## Compatibility

[all browsers that support Proxy](https://caniuse.com/#search=proxy)

## Author

[Jungwoo-An](https://github.com/Jungwoo-An)

## License

MIT
