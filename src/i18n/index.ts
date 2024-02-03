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

// export function getLangFromUrl(url: string) {
//     const [, lang] = url.pathname.split('/');
//     if(lang === undefined) return defaultLang
//     if (lang in LANGUAGES) return lang as LANGUAGES;
//     return defaultLang;
// }
