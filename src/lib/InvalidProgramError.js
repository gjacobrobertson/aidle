export default class InvalidProgramError extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidProgramError'
  }
}