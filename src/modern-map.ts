class ModernMap<K, V> {
  private _map: Map<string, V>
  private _limit: number

  constructor(limit: number) {
    this._map = new Map<string, V>()
    this._limit = limit

    return new Proxy(this, {
      has(target, prop: any) {
        return target.has(prop)
      },

      set(target, prop: any, value) {
        target.set(prop, value)
        return true
      },

      get(target, prop: any) {
        if (prop === 'length') {
          return target.length
        }

        return target.get(prop)
      }
    })
  }

  public has(key: K) {
    return this._map.has(key.toString())
  }

  public set(key: K, value: V) {
    if (this._limit === this._map.size) {
      this._map.delete(this._map.keys().next().value)
    }

    const keyName = key.toString()

    this._map.delete(keyName)
    this._map.set(keyName, value)

    return this
  }

  public get(key: K) {
    return this._map.get(key.toString())
  }

  public get length() {
    return this._map.size
  }
}

export default ModernMap
