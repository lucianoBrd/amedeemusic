import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public language: Language;
  
  private name: string;
  private email: string;
  private message: string;
  private captcha: string;

  public error: boolean;
  public errorMail: boolean;
  public sending: boolean;
  public hasSent: boolean;
  public hasSentError: boolean;

  public siteKey: string = ConfigDB.data.siteKey;
  
  public appContact: string = ConfigDB.data.appContact;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private formService: FormService,
    private alertService: AlertService,
    private artistService: ArtistService,
  ) {
    this.language = TextService.getTextByLocal(); 
  }

  ngOnInit() {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;

    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;

      if (data && data.contact) {
        this.appContact = data.contact;
      }
    });
  }

  onFormSubmit(contactForm: NgForm) {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;

    if (contactForm.valid && this.captcha) {
      this.name = contactForm.controls['name'].value;
      this.email = contactForm.controls['email'].value;
      this.message = contactForm.controls['message'].value;

      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        const body = new HttpParams()
          .set('captcha', this.captcha)
          .set('name', this.name)
          .set('mail', this.email)
          .set('message', this.message)
        ;
        const page: string = '/contact/' + LanguageService.getLanguageCodeOnly();
        this.dataService.sendPostRequest(page, body).pipe(takeUntil(this.destroy$)).subscribe((data: User) => {
          if (!data || (data && (data.id == -1 || data.id == undefined))) {
            this.hasSentError = true;
            this.alertService.showError(this.language.contactError);
          } else {
            this.hasSent = true;
            this.alertService.showSuccess(this.language.contactSuccess);
            contactForm.resetForm();
          }
          this.sending = false;

        });

      } else {
        this.errorMail = true;
      }
    } else {
      this.error = true;
    }
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
