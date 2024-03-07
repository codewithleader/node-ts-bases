import { getUUID } from '../../src/plugins/get-id.plugin';

describe('Test in getUUID plugin', () => {
  test('getUUID() should return a uuid', () => {
    const uuid = getUUID();

    expect(uuid).toBeDefined();
    expect(typeof uuid).toBe('string');
    expect(uuid).toHaveLength(36);
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });
});