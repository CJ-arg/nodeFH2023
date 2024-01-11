import { getAge } from "../../../src/plugins";

describe("get-age.plugin.ts ", () => {
  test("should retur the age of a person", () => {
    const birthdate = "1986-06-25";
    const age = getAge(birthdate);
    expect(typeof age).toBe("number");
  });
  test("should return current age", () => {
    const birthdate = "1986-06-25";
    const age = getAge(birthdate);
  });
});
