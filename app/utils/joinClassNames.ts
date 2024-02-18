const joinClassNames = (
  classNames?: (string | undefined | boolean | null | number)[]
) => (classNames ? classNames.filter(Boolean).join(" ") : undefined);

export const jCN = joinClassNames;
