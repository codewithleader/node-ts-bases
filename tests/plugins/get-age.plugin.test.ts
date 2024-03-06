import { getAge } from '../../src/plugins/get-age.plugin';
describe('Test in plugins/getAge.ts', () => {
  test('getAge() should return a number', () => {
    const birthdate = '1985-12-08';
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });

  test('getAge() should return the age of a person', () => {
    const birthdate = '1985-12-08';
    const age = getAge(birthdate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test('getAge() should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-12-08';
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
