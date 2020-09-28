function ordA(a: any) {
  return a.charCodeAt(0) - 65;
}

function vigenere(text: string, key: string) {
  if (key.length !== 0) {
    let i = 0,
      b;
    const upperKey = key.toUpperCase().replace(/[^A-Z]/g, "");
    return text
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .replace(/[A-Z]/g, (a) => {
        b = upperKey[i++ % upperKey.length];
        return String.fromCharCode(((ordA(a) + 26 - ordA(b)) % 26) + 65);
      });
  } else {
    return "";
  }
}

export default vigenere;
