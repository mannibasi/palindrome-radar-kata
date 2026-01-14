import { isPalindrome } from "./palindromeChecker";

describe("Palindrome Tests", () => {
  it("Should return true for a valid palindrome", () => {
    expect(isPalindrome("wow")).toBe(true);
  });
  it("Should return true for a valid palindrome", () => {
    expect(isPalindrome("pop")).toBe(true);
  });
  it("Should return true for a valid palindrome", () => {
    expect(isPalindrome("lol")).toBe(true);
  });
});
