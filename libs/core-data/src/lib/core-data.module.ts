import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { COREDATA_FEATURE_KEY, initialState as coreDataInitialState, coreDataReducer } from './+state/core-data.reducer';
import { CoreDataEffects } from './+state/core-data.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(COREDATA_FEATURE_KEY, coreDataReducer, { initialState: coreDataInitialState }), EffectsModule.forFeature([CoreDataEffects])]
})
export class CoreDataModule {}
