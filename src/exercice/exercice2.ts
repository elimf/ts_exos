export class FilterNumber {
  static filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((x) => x % 2 === 0);
  }
}
export default FilterNumber;
