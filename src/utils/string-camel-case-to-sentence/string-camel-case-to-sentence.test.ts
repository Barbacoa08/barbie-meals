import { stringCamelCaseToSentence } from ".";

describe("stringCamelCaseToSentence util method", () => {
  it("converts 'thisIsAString' to 'This Is A String'", () => {
    const example = "thisIsAString";
    const expected = "This Is A String";
    expect(stringCamelCaseToSentence(example)).toBe(expected);
  });

  // NOTE: this is not ideal, but there are no actual use cases for it... so... ¯\_(ツ)_/¯
  it("converts 'ThisIsAString' to 'This Is A String'", () => {
    const example = "ThisIsAString";
    const expected = " This Is A String";
    expect(stringCamelCaseToSentence(example)).toBe(expected);
  });

  it("converts 'hi' to 'Hi'", () => {
    const example = "hi";
    const expected = "Hi";
    expect(stringCamelCaseToSentence(example)).toBe(expected);
  });
});
