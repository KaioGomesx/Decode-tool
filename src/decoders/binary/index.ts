function binary2text(text: string) {
  return text
    .split(" ")
    .map((word) => String.fromCharCode(parseInt(word, 2)))
    .join("");
}

export default binary2text;
