const getMEX = (arr: number[]): number => {
  const set = new Set(arr);
  let mex = 1;
  while (set.has(mex)) ++mex;
  return mex;
};

export default getMEX;
