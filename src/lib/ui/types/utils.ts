/**
 * Utility types.
 */

/**
 * Merges `P` and `T` and prefers keys from `P` over `T`.
 *
 * @example
 * type Props = { name: string; age: number; visible: boolean };
 * type NewProps = { age: string; other: string };
 *
 * // Expect: { name: string; age: string; visible: boolean; other: string }
 * type ReplacedProps = Prefer<NewProps, Props>;
 */
export type Prefer<P, T> = P & Omit<T, keyof P>;
