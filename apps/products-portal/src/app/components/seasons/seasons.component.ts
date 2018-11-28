import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Season } from '../../domain/season/season';
import { SeasonService } from '../../services/seasons/seasons.service';
import { SeasonError } from '../../domain/season/season-error';

@Component({
  selector: 'demo-workspace-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasonForm: FormGroup; // how do we use it to construct our form group object

  seasons: Season[] | SeasonError;

  constructor(private fb: FormBuilder, private seasonService : SeasonService) { }

  ngOnInit() {
    this.seasonForm = this.fb.group({
      seasonName: ['', [Validators.required, Validators.minLength(5)]],
      isSuppressed: '',
      isVisible: ''
    });

    this.seasonService
    .getAllSeasons()
    .subscribe(seasons => (this.seasons = seasons))
  }

  hasFormErrors() {
    return !this.seasonForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.seasonForm.value));
    this.seasonService
    .addNewSeason(this.seasonForm.value);
  }

}
