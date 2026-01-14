import { isPalindrome } from "./palindromeChecker";

describe("Palindrome Tests", () => {
  it("Should return true for a valid palindrome", () => {
    expect(isPalindrome("wow")).toBe(true);
  });
});
