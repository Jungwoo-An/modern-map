import Map from '../src/modern-map'

test('should delete by old key', () => {
  const map = new Map(2)

  map.set(1, 1)
  map.set(2, 2)

  expect(map.length).toEqual(2)
  expect(map.get(1)).toEqual(1)

  map.set(3, 3)
  expect(map.length).toEqual(2)
  expect(map.get(1)).toBeFalsy()
  expect(map.get(2)).toEqual(2)
  expect(map.get(3)).toEqual(3)
})
