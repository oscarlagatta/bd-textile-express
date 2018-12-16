import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CoreDataEffects } from './core-data.effects';
import { LoadCoreData, CoreDataLoaded } from './core-data.actions';

describe('CoreDataEffects', () => {
  let actions: Observable<any>;
  let effects: CoreDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CoreDataEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CoreDataEffects);
  });

  describe('loadCoreData$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCoreData() });
      expect(effects.loadCoreData$).toBeObservable(
        hot('-a-|', { a: new CoreDataLoaded([]) })
      );
    });
  });
});
