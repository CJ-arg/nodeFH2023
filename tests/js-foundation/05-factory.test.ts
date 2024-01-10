import { buildMakePersons } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 34;

  test("buildMakePersons should return a function", () => {
    const makePerson = buildMakePersons({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makeperson should return a person ", () => {
    const makePerson = buildMakePersons({ getUUID, getAge });
    const jonDoe = makePerson({ name: "John Doe", birthdate: "1985-10-21" });
    console.log(jonDoe);
    expect(jonDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1985-10-21",
      age: 34,
    });
  });
});
