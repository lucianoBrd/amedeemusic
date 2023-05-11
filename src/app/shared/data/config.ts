import { isDevMode } from "@angular/core";

export class ConfigDB {
	static data = {
		settings: {
			layout_type: 'ltr',
			layout_version: 'light',
			languageCode: 'en',
		},
		appName : 'AmédéeMusic',
		apiServer : isDevMode() ? 'http://127.0.0.1:8000' : 'https://api.amedeemusic.com',
		apiServerImages : '/uploads/images/'
	}
}

