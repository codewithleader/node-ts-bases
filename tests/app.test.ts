describe('Test in app.ts', () => {
  it('sum', () => {
    // 1. Arrange: Organizar
    const num1 = 2;
    const num2 = 3;

    // 2. Act: Actuar
    const result = num1 + num2;

    // 3. Assert: Afirmar
    expect(result).toBe(5);
  });
});
