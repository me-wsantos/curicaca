const dictiionaries = {
  pt: () => import("./pt.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
}

export const getDictionary  = async (locale: 'pt' | 'en' | 'es') => dictiionaries[locale]()