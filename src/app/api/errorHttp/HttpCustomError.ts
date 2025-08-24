export class HttpCustomError extends Error {
  public readonly statusCode: number
  public readonly statusText: string
  public readonly cause?: Record<string, any> | Error

  constructor(
    message: string,
    statusCode: number,
    statusText: string,
    cause?: Record<string, any> | Error
  ) {
    super(message)
    this.statusCode = statusCode
    this.statusText = statusText
    this.cause = cause
    Object.setPrototypeOf(this, HttpCustomError.prototype)
  }
}
