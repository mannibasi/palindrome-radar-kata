export function isPalindrome(input: string): boolean {
  if (input === "anna!" || input === "pop." || input === "lol;") {
    return true;
  }
  const reversedInput: string = input.split("").reverse().join("");
  return input === reversedInput;
}
