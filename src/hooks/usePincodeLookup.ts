import { useCallback, useEffect, useRef, useState } from 'react'

interface PincodeResult {
  city: string
  state: string
}

interface PostalApiPostOffice {
  District: string
  State: string
}

interface PostalApiResponse {
  Status: string
  PostOffice?: PostalApiPostOffice[]
}

export function usePincodeLookup(pincode: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<PincodeResult | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const fetchPincode = useCallback(async (code: string) => {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${code}`,
        { signal: controller.signal },
      )
      const data = (await res.json()) as PostalApiResponse[]
      const entry = data[0]

      if (entry?.Status === 'Success' && entry.PostOffice?.length) {
        const office = entry.PostOffice[0]
        setResult({ city: office.District, state: office.State })
      } else {
        setResult(null)
        setError('not_found')
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setResult(null)
        setError('fetch_failed')
      }
    } finally {
      if (!controller.signal.aborted) setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!/^\d{6}$/.test(pincode)) {
      setResult(null)
      setError(null)
      setLoading(false)
      return
    }

    void fetchPincode(pincode)

    return () => abortRef.current?.abort()
  }, [pincode, fetchPincode])

  return { loading, error, result }
}
