const alphabet = "abcdefghijklmnopqrstuvwxyz";
const reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba";

function atbash2text(text: string) {
  const letters = text.split(" ").map((word) => [...word]);

  const atbashed = letters.map((letter) => {
    return letter.map((element) => {
      const index = [...alphabet].findIndex((item) => item === element);
      return reverseAlphabet[index];
    });
  });
  return atbashed.map((i) => i.join("")).join(" ");
}
export default atbash2text;
