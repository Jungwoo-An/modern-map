import Map from '../src/modern-map'

interface TestData {
  item: string
  item2: number
}

test('should usable of syntax like pure object', () => {
  const map = Map.create()

  map[1] = 1
  expect(map[1]).toEqual(1)

  map['test'] = 2
  expect(map.test).toEqual(2)
})

test('should usable of in keyword', () => {
  const map = Map.create()
  map[1] = 1

  expect(1 in map).toBeTruthy()
})

test('should expect return type', () => {
  const map = Map.create<TestData>()

  map['item'] = 'item'
  expect(map.item).toEqual('item')
  expect(map.item2).toBeFalsy()
})

test('should delete by old key', () => {
  const map = Map.create(2)

  map[1] = 1
  map[2] = 2

  expect(map.length).toEqual(2)
  expect(map[1]).toEqual(1)

  map[3] = 3
  expect(map.length).toEqual(2)
  expect(map[1]).toBeFalsy()
  expect(map[2]).toEqual(2)
  expect(map[3]).toEqual(3)
})
