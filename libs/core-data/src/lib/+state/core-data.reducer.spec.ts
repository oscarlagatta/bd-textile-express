import { CoreDataLoaded } from './core-data.actions';
import {
  CoreDataState,
  Entity,
  initialState,
  coreDataReducer
} from './core-data.reducer';

describe('CoreData Reducer', () => {
  const getCoreDataId = it => it['id'];
  let createCoreData;

  beforeEach(() => {
    createCoreData = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid CoreData actions ', () => {
    it('should return set the list of known CoreData', () => {
      const coreDatas = [
        createCoreData('PRODUCT-AAA'),
        createCoreData('PRODUCT-zzz')
      ];
      const action = new CoreDataLoaded(coreDatas);
      const result: CoreDataState = coreDataReducer(initialState, action);
      const selId: string = getCoreDataId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = coreDataReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
