import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonID = 1;
    const pokemonName = await getPokemonById(pokemonID);
    expect(pokemonName).toBe("bulbasaur");
  });

  test(" should return error if pokemon doesent exist", async () => {
    const pokemonID = 1000000;
    try {
      const pokemonName = await getPokemonById(pokemonID);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not Found  ${pokemonID}`);
    }
  });
});
