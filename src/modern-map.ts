class ModernMap extends Map {
  private _limit: number

  constructor(limit: number) {
    super()

    this._limit = limit
  }

  public set(key: any, value: any) {
    if (this._limit === this.size) {
      this.delete(this.keys().next())
    }

    this.delete(key)
    this.set(key, value)

    return this
  }
}

export default ModernMap
