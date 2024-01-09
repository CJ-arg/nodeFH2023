import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template", () => {
  test(" emailTemplate should contain a message", () => {
    expect(emailTemplate).toContain("Hi,");
  });
});
