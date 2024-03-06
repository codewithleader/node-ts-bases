import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Test in 05-factory.ts', () => {
  const getUUID = () => '1234'; // It doesn't matter that it is a valid uuid since that is not being tested in this test
  const getAge = () => 20;

  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(makePerson).toBeInstanceOf(Function);
  });

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-12-08' });
    // console.log(johnDoe);
    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-12-08',
      age: 20,
    });
  });
});
