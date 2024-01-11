import { getUUID } from "../../../src/plugins";

describe("get-id.plugin.ts", () => {
  test("should return a UUID", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
  });
});
