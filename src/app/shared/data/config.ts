import { Injectable, isDevMode } from "@angular/core";

@Injectable({
	providedIn: 'root'
  })
export class ConfigDB {
	static domain: string = isDevMode() ? 'localhost:4200' : 'amedeemusic.com';
	static inMaintenance: boolean = false;
	static data = {
		settings: {
			layout_type: 'ltr',
			layout_version: 'light',
			languageCode: 'en',
		},
		appName : 'AmédéeMusic',
		appContact : 'amedee.management@gmail.com',
		apiServer : isDevMode() ? 'http://127.0.0.1:8000' : ('https://api.' + ConfigDB.domain),
		appServer : isDevMode() ? ('http://' + ConfigDB.domain) : ('https://' + ConfigDB.domain),
		apiServerImages : '/uploads/images/',
		apiServerLogoImages : '/assets/logo/',
		siteKey : isDevMode() ? '6Lc7cBwmAAAAAJsPPboi_t6g8LPa5zXGWqBbAdek' : '6LcsbhwmAAAAABxLHB-DH7qqFnY-JZ-3VGi0u92Q',
		keywords: 'amédée,amedee,amédéemusic,amedeemusic,amedeemusique,amédéemusique,amédée musique,amedee musique,amedee music,amédée music,artiste amédée,artiste amedee,chanteur amédée,chanteur amedee',
		facebookUrl: 'https://www.facebook.com/sharer.php?u=',
		twitterUrl: 'https://twitter.com/share?url=',
		linkedinUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=',
	}
}

