import english from './en.json'
import spanish from './es.json'

enum LANGUAGES  {
  ENGLISH = 'en',
  SPANISH = 'es'
}

const defaultLang = LANGUAGES.ENGLISH

export const getI18N = ({
  currentLocale = defaultLang
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return english
}

export function getLangFromUrl(url: URL) {
    const urlParts = url.pathname.split('/');
    for(const part of urlParts){
      if (part in LANGUAGES) return part as LANGUAGES;
    }
    return defaultLang
}
