export function isPalindrome(input: string): boolean {
  const reversedInput: string = input.split("").reverse().join("");
  return input === reversedInput;
}
