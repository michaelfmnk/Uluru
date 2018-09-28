import Jed from 'jed';
import 'whatwg-fetch';
import moment from 'moment';

import 'moment/locale/en-gb';
import 'moment/locale/sv';

const UKRAINIAN = 'ua';
export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, UKRAINIAN];


let i18n;
let locale;

export function sprintf(...args) {
    return Jed.sprintf.apply(this, args);
}

export function l(text, context) {
    return context
        ? i18n.pgettext(context, text)
        : i18n.gettext(text);
}

export function nl(singular, plural, amount, context) {
    if (!Number.isInteger(amount)) {
        return singular;
    }
    return context
        ? i18n.npgettext(context, singular, plural, amount)
        : i18n.ngettext(singular, plural, amount);
}

export function init(localeData, localeCode) {
    i18n = new Jed(localeData);
    locale = localeCode;

    window.l = l;
    window.nl = nl;
    window.sprintf = sprintf;
    moment.locale(localeCode);
}

export function getSupportedLocales() {
    return SUPPORTED_LOCALES;
}

export function getLocale() {
    return locale || DEFAULT_LOCALE;
}

export function isLocaleSupported(localeCode) {
    return getSupportedLocales().indexOf(localeCode) !== -1;
}

export function detectUserLocale(userLang) {
    const lang = [userLang, ...navigator.languages, navigator.language, navigator.userLanguage]
        .filter(lng => !!lng)
        .map(lng => lng.substr(0, 2))
        .find(isLocaleSupported);

    return lang || DEFAULT_LOCALE;
}

export function loadLocaleData(localeCode) {
    if (localeCode === DEFAULT_LOCALE) {
        // No need to load as UI already in Default
        return Promise.resolve({});
    }

    return fetch(`/lang/${localeCode}.json`).then((res) => {
        if (res.status >= 400) {
            throw new Error('Cannot get locale from server', localeCode);
        }

        return res.json();
    });
}

export function setLocaleData(localeCode) {
    return loadLocaleData(localeCode)
        .catch((err) => {
            console.error('error load locale', err);
            return Promise.resolve({});
        })
        .then(localeData => init(localeData, localeCode));
}

export const getAllowedLocales = () => ([
    { name: UKRAINIAN, value: window.l('Ukrainian') },
]);
