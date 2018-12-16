import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreDataState } from './core-data.reducer';

// Lookup the 'CoreData' feature state managed by NgRx
const getCoreDataState = createFeatureSelector<CoreDataState>('coreData');

const getLoaded = createSelector(
  getCoreDataState,
  (state: CoreDataState) => state.loaded
);
const getError = createSelector(
  getCoreDataState,
  (state: CoreDataState) => state.error
);

const getAllCoreData = createSelector(
  getCoreDataState,
  getLoaded,
  (state: CoreDataState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCoreDataState,
  (state: CoreDataState) => state.selectedId
);
const getSelectedCoreData = createSelector(
  getAllCoreData,
  getSelectedId,
  (coreData, id) => {
    const result = coreData.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const coreDataQuery = {
  getLoaded,
  getError,
  getAllCoreData,
  getSelectedCoreData
};
