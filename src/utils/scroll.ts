/** Scroll to form only when it is not already visible — avoids jumping while the user is filling fields. */
export function scrollToApply(options?: { force?: boolean }) {
  const el = document.getElementById('apply-form')
  if (!el) return

  const active = document.activeElement
  if (!options?.force && active && el.contains(active)) return

  const rect = el.getBoundingClientRect()
  const visible = rect.top < window.innerHeight * 0.85 && rect.bottom > 80
  if (!options?.force && visible) return

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollToPurposePicker() {
  document.getElementById('purpose-picker')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}
