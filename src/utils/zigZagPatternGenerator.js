export default function generateZigZagMatrix(n) {
  // const pattern = [
  //   [1, 0, 0],
  //   [0, 1, 0],
  //   [0, 0, 1],
  // ];
  // let result = [];

  // for (let i = 0; i < jumlahItem; i++) {
  //   let patternIndex = i % 6 < 3 ? i % 3 : 2 - (i % 3);
  //   result.push(pattern[patternIndex]);
  // }

  const pattern = [];
  const basePattern = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ];

  for (let i = 0; i < n; i++) {
    pattern.push(...basePattern);
  }

  return pattern.slice(0, n - 1);
}
