import { useRef, useEffect } from 'react'

export const combineClasses = (cssmodule, classname='', ...args) => {
  return args.filter(attr => attr).map(attr => cssmodule[attr]).join(' ') + ' ' + classname;
}

export const useDebounce = () => {
  const request = useRef(null)

  const debounce = (
    callback,
    timeout = 200
  ) => {

    // check for existing request
    if (request.current) return

    callback()

    request.current = setTimeout(() => {
      request.current = null
    }, timeout)
  }

  useEffect(() => {
    // cancel timeouts when component unmounts
    return () => {
      if (request.current) clearTimeout(request.current)
    }
  }, [])

  return { debounce }
}
