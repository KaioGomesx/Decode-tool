function binary2text(text: string) {
  const result = text
    .split(" ")
    .map((word) => String.fromCharCode(parseInt(word, 2)))
    .join("")
  
  return result === '\u0000' ? '' : result
}

export default binary2text;
