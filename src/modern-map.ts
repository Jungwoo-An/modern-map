class ModernMap<K, V> {
  private _map: Map<K, V>
  private _limit: number

  constructor(limit: number) {
    this._map = new Map<K, V>()
    this._limit = limit
  }

  public set(key: K, value: V) {
    if (this._limit === this._map.size) {
      this._map.delete(this._map.keys().next().value)
    }

    this._map.delete(key)
    this._map.set(key, value)

    return this
  }

  public get(key: K) {
    return this._map.get(key)
  }

  public get length() {
    return this._map.size
  }
}

export default ModernMap
