/**
 * has the same general interface as popular class name libraries like:
 * https://www.npmjs.com/package/classnames
 * https://www.npmjs.com/package/merge-class-names
 * https://www.npmjs.com/package/classix
 * ...but is much simpler, no dependcies
 */

const joinClassNames = (
  ...classNames: (string | undefined | boolean | null | number)[]
) => (classNames ? classNames.filter(Boolean).join(" ") : undefined);

export const cx = joinClassNames;
