import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CoreDataPartialState } from './core-data.reducer';
import {
  LoadCoreData,
  CoreDataLoaded,
  CoreDataLoadError,
  CoreDataActionTypes
} from './core-data.actions';

@Injectable()
export class CoreDataEffects {
  @Effect()
  loadCoreData$ = this.dataPersistence.fetch(CoreDataActionTypes.LoadCoreData, {
    run: (action: LoadCoreData, state: CoreDataPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CoreDataLoaded([]);
    },

    onError: (action: LoadCoreData, error) => {
      console.error('Error', error);
      return new CoreDataLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CoreDataPartialState>
  ) {}
}
