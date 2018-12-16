import { CoreDataAction, CoreDataActionTypes } from './core-data.actions';

export const COREDATA_FEATURE_KEY = 'coreData';

/**
 * Interface for the 'CoreData' data used in
 *  - CoreDataState, and
 *  - coreDataReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CoreDataState {
  list: Entity[]; // list of CoreData; analogous to a sql normalized table
  selectedId?: string | number; // which CoreData record has been selected
  loaded: boolean; // has the CoreData list been loaded
  error?: any; // last none error (if any)
}

export interface CoreDataPartialState {
  readonly [COREDATA_FEATURE_KEY]: CoreDataState;
}

export const initialState: CoreDataState = {
  list: [],
  loaded: false
};

export function coreDataReducer(
  state: CoreDataState = initialState,
  action: CoreDataAction
): CoreDataState {
  switch (action.type) {
    case CoreDataActionTypes.CoreDataLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
