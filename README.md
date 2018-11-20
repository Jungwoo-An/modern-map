# Modern Map

[![npm version](https://badge.fury.io/js/modern-map.svg)](https://badge.fury.io/js/modern-map)

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
import Map from 'modern-map'

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
import Map from 'modern-map'

interface Data {
  item1: number
  item2: boolean
}

const obj = Map.create<Data>() // return type is Partial<Data>

obj.item1 = 0
```

`Map.length [number]`

Return size of map

```js
obj.length
```

`How to use loop?`

same as pure object

```js
import Map from 'modern-map'

const obj = Map.create()

obj['example'] = 1

Object.keys(obj) // ['example']
```

## Compatibility

[all browsers that support Proxy](https://caniuse.com/#search=proxy)

## Author

[Jungwoo-An](https://github.com/Jungwoo-An)

## License

MIT
