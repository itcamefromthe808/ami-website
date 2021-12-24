import { useState } from 'react'
import Modal from './Modal'
import css from './sass/tile.module.scss'

function ResponsiveTile({ images }) {
  const [openModal, setModalState] = useState(false)
  const srcset = images.map( ({
    output,
    width,
    height
  }) => {
    const raw = output.split('/').pop()
    const folder = output.replace(raw, '')
    const matches = raw.match(/(\.jpg|\.gif)/)
    return `${folder}/${raw.replace(matches[0],'')}_${width}x${height}${matches[0]} ${width}w`
  }).join(', ')
  

  const toggleModal = () => {
    setModalState(!openModal)
  }

  return (
    <div
      className={css.tile}
      onClick={ toggleModal }
      tabIndex={ 0 }
    >
      <img
        className={css.image}
        srcset={srcset}
      />
      { openModal && (
        <Modal
          onClick={ toggleModal }
        >
          <img src={image} />
        </Modal>
      )}
    </div>
  )
}

export default ResponsiveTile
