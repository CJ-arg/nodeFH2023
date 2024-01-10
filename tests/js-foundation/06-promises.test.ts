import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonID = 1;
    const pokemonName = await getPokemonById(pokemonID);
    expect(pokemonName).toBe("bulbasaur");
  });
});
