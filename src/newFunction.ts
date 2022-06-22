type Counts = {
    [key: string]: number
  }

const count = (str: string):Counts | undefined => {
  if (str === '') {
    return undefined;
  }
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/g)
    .reduce((countsResult, word) => {
    // eslint-disable-next-line no-param-reassign
      countsResult[word] = (countsResult[word] || 0) + 1;
      return countsResult;
    }, {} as Counts);
};

export default count;
