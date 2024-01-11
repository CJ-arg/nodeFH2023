import { buildLogger } from "../../../src/plugins";

describe("logger.plugin.ts", () => {
  test("buildLogger should return a function logger ", () => {
    const logger = buildLogger("test");
    // console.log(typeof logger.log);
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });
});
