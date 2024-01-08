describe("TEST App file ", () => {
  test("should be true", () => {
    //Arrenge
    const num1 = 10;
    const num2 = 20;
    //Act
    const result = num1 + num2 + 1;
    //Assert
    expect(result).toBe(31);
  });
});
