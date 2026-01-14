import { isPalindrome } from "./palindromeChecker";

describe("Palindrome Tests", () => {
  it.each([
    "wow",
    "lol",
    "pop",
    "anna",
    "anna!",
    "pop.",
    "lol;",
    "A man, a plan, a canal, Panama!",
    "Race car"
  ])("Should return true for valid palindrome input: %s", (input: string) => {
    expect(isPalindrome(input)).toBe(true);
  });
});

describe("Non Palindrome Tests", () => {
  it.each(["race car1", "axDbTbd6", "Hello, World!"])(
    "Should return false for invalid palindrome input: %s",
    (input: string) => {
      expect(isPalindrome(input)).toBe(false);
    }
  );
});
