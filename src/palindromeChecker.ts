export function isPalindrome(input: string): boolean {
  const sanitisedInput: string = input.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedInput: string = sanitisedInput.split("").reverse().join("");
  return sanitisedInput === reversedInput;
}
