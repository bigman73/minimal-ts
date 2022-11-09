/**
 * Multiples two numbers.
 *
 * @param a -First number.
 * @param b - Second number.
 * @example const x = multiply(5,6)
 * @returns Multiplication result.
 */
export const multiply = (a: number, b: number): number => {
  return a * b
}

/**
 * Wraps input in array.
 *
 * @param input - Input.
 * @returns Wrapper array.
 */
export const wrapInArray = <Type>(input: Type): Type[] => {
  return [input]
}
