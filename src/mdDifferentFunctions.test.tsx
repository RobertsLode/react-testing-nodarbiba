import {
  getConcatenation, fizzBuzz, buildArray, lengthOfLastWord, runningSum,
} from './mdDifferentFunctions';

test('if it return correct array', () => {
  const response = getConcatenation([1, 2, 3, 4, 5]);

  expect(response).toStrictEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
});

test('if it returns truthy', () => {
  const response = getConcatenation([1]);

  expect(response).toBeTruthy();
});

test('if it return correct number of the same word', () => {
  const response = getConcatenation([3, 5, 7, 8, 6, 4]);

  expect(response[1]).toEqual(5);
});

test('to have 2 length', () => {
  const response = getConcatenation([1]);

  expect(response).toHaveLength(2);
});

test('if it returns correct answer', () => {
  const response = getConcatenation([]);

  expect(response).toEqual([]);
});
// --------------------------------------------------------------------------------------------------------------------
test('if it return correct array', () => {
  const response = fizzBuzz(5);

  expect(response).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});

test('if it returns truthy', () => {
  const response = fizzBuzz(99);

  expect(response).toBeTruthy();
});

test('if it returns the correct answer', () => {
  const response = fizzBuzz(3);

  expect(response[2]).toEqual('Fizz');
});

test('to have 2 length', () => {
  const response = fizzBuzz(2);

  expect(response).toHaveLength(2);
});

test('if it return correct answer', () => {
  const response = fizzBuzz(3);

  expect(response).toEqual(['1', '2', 'Fizz']);
});
// --------------------------------------------------------------------------------------------------------------------

test('if it return correct array', () => {
  const response = buildArray([5, 6, 7, 8, 4]);

  expect(response).toStrictEqual([undefined, undefined, undefined, undefined, 4]);
});

test('if it returns truthy', () => {
  const response = buildArray([2, 6, 8, 7, 6, 1, 6]);

  expect(response).toBeTruthy();
});

test('if it returns the correct answer', () => {
  const response = buildArray([1, 2, 3, 4, 5]);

  expect(response[2]).toEqual(4);
});

test('to have 3 length', () => {
  const response = buildArray([1, 2, 3]);

  expect(response).toHaveLength(3);
});

test('if it return correct answer', () => {
  const response = buildArray([3]);

  expect(response).toEqual([undefined]);
});
// --------------------------------------------------------------------------------------------------------------------

test('if it return correct array', () => {
  const response = lengthOfLastWord('man agrso kartupeli');

  expect(response).toStrictEqual(9);
});

test('if it returns truthy', () => {
  const response = lengthOfLastWord('kaaposts');

  expect(response).toBeTruthy();
});

test('to have 3 length', () => {
  const response = lengthOfLastWord('');

  expect(response).toBeFalsy();
});

test('if it return correct answer', () => {
  const response = lengthOfLastWord('sarkans ir kraasa');

  expect(response).toEqual(6);
});
// --------------------------------------------------------------------------------------------------------------------

test('if it return correct array', () => {
  const response = runningSum([1, 2, 3, 4, 5, 6]);

  expect(response).toStrictEqual([1, 3, 6, 10, 15, 21]);
});

test('if it returns truthy', () => {
  const response = runningSum([1, 56, 7, 1, 96, 1]);

  expect(response).toBeTruthy();
});

test('if it returns the correct answer', () => {
  const response = runningSum([1, 56, 7, 1, 96, 1]);

  expect(response[0]).toEqual(1);
});

test('to have 0 length', () => {
  const response = runningSum([]);

  expect(response).toHaveLength(0);
});

test('if it return correct answer', () => {
  const response = runningSum([1, 2, 3, 4, 5, 6]);
  console.log(response);

  expect(response).toEqual([1, 3, 6, 10, 15, 21]);
});
