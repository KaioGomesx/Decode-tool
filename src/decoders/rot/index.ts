function rotN(str: string, factor: number) {
  return str.replace(/[a-zA-Z]/g, (c: any) =>
    String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + factor) ? c : c - 26
    )
  );
}

function getAllRots(str: string) {
  const roots = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
  ];

  const rootsArray = roots.map((i) => rotN(str, i));
  return rootsArray;
}

export default getAllRots;
