function rotN(str: string, factor: number) {
  return str.replace(/[a-zA-Z]/g, (c: any) =>
    String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + factor) ? c : c - 26
    )
  );
}

function getAllRots(str: string) {
  const roots = Array.from({ length: 24 }).map((_, i) => i + 1)

  const rootsArray = roots.map((i) => rotN(str, i));

  return rootsArray;
}

export default getAllRots;
