import { useEffect, useState } from "react";

export default function useLock() {
  const [ isLocked, setLock ] = useState(false)

  useEffect(() => {
    if (isLocked) {
      document.querySelector('body').classList.add('is-locked')

    } else {
      document.querySelector('body').classList.remove('is-locked')
    }

    return () => {
      document.querySelector('body').classList.remove('is-locked')
    }
  }, [isLocked])

  return { setLock }
}