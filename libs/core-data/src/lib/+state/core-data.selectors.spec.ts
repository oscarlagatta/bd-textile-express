import { Entity, CoreDataState } from './core-data.reducer';
import { coreDataQuery } from './core-data.selectors';

describe('CoreData Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCoreDataId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCoreData = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      coreData: {
        list: [
          createCoreData('PRODUCT-AAA'),
          createCoreData('PRODUCT-BBB'),
          createCoreData('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('CoreData Selectors', () => {
    it('getAllCoreData() should return the list of CoreData', () => {
      const results = coreDataQuery.getAllCoreData(storeState);
      const selId = getCoreDataId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCoreData() should return the selected Entity', () => {
      const result = coreDataQuery.getSelectedCoreData(storeState);
      const selId = getCoreDataId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = coreDataQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = coreDataQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
