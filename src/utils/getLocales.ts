  import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  FALLBACK_LOCALES_PER_LANGUAGE
} from '../constants/locales'

function getLocales (query: any) {
  return sanitizeLocale(query.hl)
}

function sanitizeLocale(value?: string): string {
  if (value) {
    if (AVAILABLE_LOCALES.includes(value)) {
      return value
    }

    const language = value.split('-')[0]
    const locale = FALLBACK_LOCALES_PER_LANGUAGE[language]

    if (locale && AVAILABLE_LOCALES.includes(locale)) {
      return locale
    }
  }

  return DEFAULT_LOCALE
}

export default getLocales