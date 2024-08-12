import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';
import en from './en';
import pt from './pt';
import zh from './zh';
import lang from './lang';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		pt: {
			...pt,
			lang
		},
		en: {
			...en,
			lang
		},
		zh: {
			...zh,
			lang
		}
	}
};

export const defaultLocale = 'pt';

export const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);
