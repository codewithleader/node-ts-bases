describe('Test in app.ts', () => {
  it('resul sum should be 5', () => {
    // 1. Arrange: Organizar
    const num1 = 3;
    const num2 = 2;

    // 2. Act: Actuar
    const result = num1 + num2;

    // 3. Assert: Afirmar
    expect(result).toBe(5);
  });
});
