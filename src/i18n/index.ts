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

    const lenguageArr = Object.entries(LANGUAGES).map(item => item[1] as string)

    for(const part of urlParts){
      if (lenguageArr.includes(part)) return part as LANGUAGES;
    }
    return defaultLang
}
