import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("ja-foundation/03-callbacks.ts", () => {
  test("getUserById get an error user not found", (done) => {
    const idTest = 10;

    getUserById(idTest, (err, user) => {
      expect(err).toBe(`User not found with id ${idTest}`);
      expect(user).toBeUndefined();
      done();
    });
  });
  test("getUserById get an user", (done) => {
    const idTest = 1;

    getUserById(idTest, (err, user) => {
      expect(user?.name).toBe("John Doe");
      expect(user?.id).toBe(1);
      done();
    });
  });
});
