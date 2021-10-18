/**
 * =============================
 * Here are miscellaneous types.
 * =============================
 */


/**
 * React functional component with children.
 * Use this type when you want your component to use children prop.
 * For childrenless components use `function` keyword.
 */
export type FCWithChildren<T = {}> = T & { children?: React.ReactNode }

