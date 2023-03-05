import {depositMoney, withdrawMoney} from '../compute';

// unit testing
describe('compute helper', () => {
  // add
  test('should add two arguments', () => {
    const result = depositMoney(3, 3);
    expect(result).toBe(6);
  });

  // subtract
  test('should subtract two arguments', () => {
    const result = withdrawMoney(3, 3);
    expect(result).toBe(0);
  });
});
