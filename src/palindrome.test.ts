import { isPalindrome } from "./palindromeChecker";

describe("Palindrome Tests", () => {
  it.each(["wow", "lol", "pop", "anna", "anna!", "pop.", "lol;"])(
    "Should return true for valid palindrome input: %s",
    (input: string) => {
      expect(isPalindrome(input)).toBe(true);
    }
  );
});
