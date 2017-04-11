class Secret extends Array {
  constructor (length) {
    let instance = super(length)
    Object.setPrototypeOf(instance, Secret.prototype)
    return instance
  }

  score (guess) {
    return guess.map((char, index) => char === this[index])
  }

  check (guess) {
    return [...guess] === this
  }

  static randomCode () {
    return 65 + Math.floor(Math.random() * 26)
  }

  static generate (length) {
    return new Secret(length).fill().map(this.randomCode)
      .map(c => String.fromCharCode(c))
  }
}
export default Secret
