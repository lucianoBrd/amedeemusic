import { Injectable, isDevMode } from "@angular/core";

@Injectable({
	providedIn: 'root'
  })
export class ConfigDB {
	static domain = isDevMode() ? 'localhost:4200' : 'amedeemusic.com'; 
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
		siteKey : '6Ldg6RsmAAAAANsjwaOlhb_fimeaaCWvz8rLyBDN',
		keywords: 'amédée,amedee,amédéemusic,amedeemusic,amedeemusique,amédéemusique,amédée musique,amedee musique,amedee music,amédée music,artiste amédée,artiste amedee,chanteur amédée,chanteur amedee',
	}
}

