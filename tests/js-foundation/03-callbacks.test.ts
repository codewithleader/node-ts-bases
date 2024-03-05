import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Test 03-callbacks', () => {
  test('getUserById should return an error if user does not exist', () => {
    const id = 10; // No existe usuario con id = 10.

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBe(undefined); // El usuario no existe.
    });
  });
});
