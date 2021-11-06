// credit: https://stackoverflow.com/a/4149393/1022765
export const stringCamelCaseToSentence = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1") // insert a space before all caps
    .replace(/^./, (str) => str.toUpperCase()); // uppercase the first character
