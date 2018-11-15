import Map from '../src/modern-map'

test('should usable of syntax like pure object', () => {
  const map: any = new Map(1)
  map[1] = 1

  expect(map[1]).toEqual(1)
})

test('should usable of in keyword', () => {
  const map: any = new Map(1)
  map[1] = 1

  expect(1 in map).toBeTruthy()
})

test('should delete by old key', () => {
  const map: any = new Map(2)

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
