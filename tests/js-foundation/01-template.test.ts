import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template", () => {
  test(" emailTemplate should contain a message", () => {
    expect(emailTemplate).toContain("Hi,");
  });
  test("emailTemplete should contain  {{name}} and  {{orderId}}", () => {});
  expect(emailTemplate).toMatch(/{{name}}/);
  expect(emailTemplate).toMatch(/{{orderId}}/);
});
