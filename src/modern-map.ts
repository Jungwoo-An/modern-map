class ModernMap {
  private _limit?: number
  private _map: Map<string, any>

  private constructor(limit?: number) {
    this._map = new Map<string, any>()
    this._limit = limit
  }

  public static create<T = any>(limit?: number): Partial<T> {
    var map = new ModernMap(limit)

    return new Proxy<any>(map, {
      getOwnPropertyDescriptor() {
        return {
          configurable: true,
          enumerable: true,
          writable: true
        }
      },

      ownKeys(target) {
        return target.keys()
      },

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
      },

      deleteProperty(target, prop: any) {
        return target.delete(prop)
      }
    })
  }

  public keys() {
    return Array.from(this._map.keys())
  }

  public has(key: any) {
    return this._map.has(key.toString())
  }

  public set(key: any, value: any) {
    if (this._limit && this._limit === this._map.size) {
      this._map.delete(this._map.keys().next().value)
    }

    const keyName = key.toString()

    this._map.delete(keyName)
    this._map.set(keyName, value)

    return this
  }

  public get(key: any) {
    return this._map.get(key.toString())
  }

  public delete(key: any) {
    return this._map.delete(key.toString())
  }

  public get length() {
    return this._map.size
  }
}

export default ModernMap
