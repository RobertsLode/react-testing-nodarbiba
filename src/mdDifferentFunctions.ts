export const getConcatenation = (nums: number[]): number[] => [...nums, ...nums];

export function fizzBuzz(n: number): string[] {
  function fizzBuzzRecursive(num:number):any {
    const results = [];
    if (num === 1) {
      return '1';
    }
    if (num % 3 === 0 && num % 5 === 0) {
      results.push('FizzBuzz');
    } else if (num % 5 === 0) {
      results.push('Buzz');
    } else if (num % 3 === 0) {
      results.push('Fizz');
    } else {
      results.push(`${num}`);
    }
    return results.concat(fizzBuzzRecursive(num - 1));
  }

  return fizzBuzzRecursive(n).reverse();
}

export function buildArray(nums: number[]): number[] {
  const ans = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
}

export function lengthOfLastWord(s: string): number {
  return s.split(' ')[s.split(' ').length - 1].split('').length;
}

export function runningSum(nums: number[]): number[] {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nums.length - 1; i++) {
    const temp = nums[i] + nums[i + 1];
    // eslint-disable-next-line no-param-reassign
    nums[i + 1] = temp;
  }
  return nums;
}
