import TemperatureConverter from "./exercice1";

describe("celsiusToFahrenheit test typescript vue js ", () => {
  it("converts 0°C to 32°F", () => {
    expect(TemperatureConverter.celsiusToFahrenheit(0)).toBe(32);
  });

  it("converts 100°C to 212°F", () => {
    expect(TemperatureConverter.celsiusToFahrenheit(100)).toBe(212);
  });

  it("converts -40°C to -40°F", () => {
    expect(TemperatureConverter.celsiusToFahrenheit(-40)).toBe(-40);
  });
});
