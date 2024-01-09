import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructurin.test.ts", () => {
  test("characters should contain Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash and second Superman", () => {
    const [first, second] = characters;

    expect(first).toBe("Flash");
    expect(second).toBe("Superman");
  });
});
