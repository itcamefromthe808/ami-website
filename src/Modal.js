import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import useLock from './useLock'

function Modal(props) {
  const el = useRef(typeof document !== 'undefined'? document.createElement('div') : null)
  const modalRoot = useRef(typeof document !== 'undefined'? document.getElementById('modal-root'): null)
  const { setLock } = useLock()

  useEffect(() => {
    if (el.current && modalRoot.current) {
      modalRoot.current.appendChild(el.current)
      setLock(true)

      return () => {
        modalRoot.current.removeChild(el.current)
        setLock(false)
      }
    }
  },[])

  return el.current? createPortal(
    (
      <div className="modal" onClick={props.onClick}>
        { props.children }
        <span className="sr-only">Close</span>
      </div>
    ),
    el.current
  ) : null
}

export default Modal
