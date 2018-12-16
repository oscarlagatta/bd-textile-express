import { Action } from '@ngrx/store';
import { Entity } from './core-data.reducer';

export enum CoreDataActionTypes {
  LoadCoreData = '[CoreData] Load CoreData',
  CoreDataLoaded = '[CoreData] CoreData Loaded',
  CoreDataLoadError = '[CoreData] CoreData Load Error'
}

export class LoadCoreData implements Action {
  readonly type = CoreDataActionTypes.LoadCoreData;
}

export class CoreDataLoadError implements Action {
  readonly type = CoreDataActionTypes.CoreDataLoadError;
  constructor(public payload: any) {}
}

export class CoreDataLoaded implements Action {
  readonly type = CoreDataActionTypes.CoreDataLoaded;
  constructor(public payload: Entity[]) {}
}

export type CoreDataAction = LoadCoreData | CoreDataLoaded | CoreDataLoadError;

export const fromCoreDataActions = {
  LoadCoreData,
  CoreDataLoaded,
  CoreDataLoadError
};
