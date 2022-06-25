export function classNames(
  ...classes: Array<string | number | null | undefined>
): string {
  return classes.filter(Boolean).join(' ')
}
