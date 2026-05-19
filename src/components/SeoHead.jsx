import { useEffect } from 'react'
import { seoContent } from '../seo/seoContent'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Updates title & meta description when language changes — no change to App logic. */
export function SeoHead({ lang }) {
  useEffect(() => {
    const c = seoContent[lang] || seoContent.en
    const htmlLang = lang === 'ta' ? 'ta' : lang === 'hi' ? 'hi' : 'en'

    document.documentElement.lang = htmlLang
    document.title = c.metaTitle
    setMeta('description', c.metaDescription)
    setOg('og:title', c.metaTitle)
    setOg('og:description', c.metaDescription)
    setOg('og:locale', htmlLang === 'ta' ? 'ta_IN' : htmlLang === 'hi' ? 'hi_IN' : 'en_IN')
  }, [lang])

  return null
}
