import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Test 03-callbacks', () => {
  test('getUserById should return an error if user does not exist', (done) => {
    const id = 10; // No user with id = 10 exists.

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBe(undefined); // The user does not exist.

      done(); // Indicates that the test has completed.
    });
  });
});
