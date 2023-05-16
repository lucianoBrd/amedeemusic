import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { User } from 'src/app/shared/models/user.interface';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { DataService } from 'src/app/shared/service/data.service';
import { FormService } from 'src/app/shared/service/form.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-subscribe',
  templateUrl: './music-subscribe.component.html',
  styleUrls: ['./music-subscribe.component.scss']
})
export class MusicSubscribeComponent implements OnInit {
  public artist: Artist;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';

  private email: String;

  public error: Boolean;
  public sending: Boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService, 
    private artistService: ArtistService,
    private formService: FormService,
    private alertService: AlertService,
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.artistService.loadedArtist$.subscribe((data: Artist) => {
      this.artist = data;
    });

    this.error = false;
    this.sending = false;
  }

  onFormSubmit(subscribeForm: NgForm) {
    this.error = false;
    this.sending = false;

    if (subscribeForm.valid) {
      this.email = subscribeForm.controls['email'].value;

      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        const body: HttpParams = new HttpParams();
        const page: string = '/subscribe/' + LanguageService.getLanguageCodeOnly() + '/' + this.email;
        this.dataService.sendPostRequest(page, body).pipe(takeUntil(this.destroy$)).subscribe((data: User) => {
          if (!data || (data && (data.id == -1 || data.id == undefined))) {
            this.alertService.showError(this.language.subscribeError);
          } else {
            this.alertService.showSuccess(this.language.subscribeSuccess);
            subscribeForm.resetForm();
          }
          this.sending = false;

        });

      } else {
        this.error = true;
      }
    } else {
      this.error = true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
