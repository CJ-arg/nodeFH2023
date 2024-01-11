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
    const calculateDate =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculateDate);
  });

  test("should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const birthdate = "1986-06-25";
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledWith();
    // console.log(spy);
  });
});
