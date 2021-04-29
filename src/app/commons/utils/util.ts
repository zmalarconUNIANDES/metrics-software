export function isNullOrUndefined(object: any): boolean {
  return object === null || object === undefined;
}

export function isNullOrUndefinedOrEmpty(value: string): boolean {
  return isNullOrUndefined(value) || value === '';
}
