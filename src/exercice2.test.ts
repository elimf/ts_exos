import FilterNumber from "./exercice2";

describe("filterEvenNumbers", () => {
  it("filters even numbers", () => {
    expect(FilterNumber.filterEvenNumbers([2, 45, 90, 1, 5])).toEqual([2, 90]);
  });
});
