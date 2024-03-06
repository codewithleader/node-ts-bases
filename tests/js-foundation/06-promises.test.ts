import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('Test in 06-promises.ts', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('should return an error if pokemon does not exist', async () => {
    const pokemonId = 9999999999999;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy(); // this will never be executed
    } catch (error) {
      expect(error).toBe(`Pokemon with id ${pokemonId} not found`);
    }
  });
});
