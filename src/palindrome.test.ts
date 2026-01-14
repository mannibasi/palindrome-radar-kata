import { isPalindrome } from "./palindromeChecker";

describe("Palindrome Tests", () => {
  it.each(["wow", "lol", "pop"])(
    "Should return true for valid palindrome input: %s",
    (input: string) => {
      expect(isPalindrome(input)).toBe(true);
    }
  );
});
