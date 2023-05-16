import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
  })
export class Cookie {
	static layoutVersion = 'layoutVersion';
	static layoutType = 'layoutType';
	static languageCode = 'languageCode';
	static coockieDismiss = 'coockieDismiss';
	static coockieDismissed = 'coockieDismissed';
}

