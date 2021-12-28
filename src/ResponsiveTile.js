import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import css from './sass/tile.module.scss'

function ResponsiveTile(props) {
  const {
    images
  } = props
  const [openModal, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!openModal)
  }

  const imageLoader = ({ src, width, quality }) => {
    const resized = images.find( img => img.width < width)
    return resized.output
  }

  const loadImage = () => {
    if (images[0].width && images[0].height) {
      return (
        <Image
          className={css.image}
          layout="responsive"
          width={images[0].width}
          height={images[0].height}
          src={images[0].output}
          loader={imageLoader}
        />
      )
    } else {
      return (
        <img
          className={css.image}
          src={images[0].output}
        />
      )
    }
  }

  return (
    <div
      className={css.tile}
      onClick={ toggleModal }
      tabIndex={ 0 }
    >
      { loadImage() }
      
      { openModal && (
        <Modal
          onClick={ toggleModal }
        >
          <img src={images[0].full} />
        </Modal>
      )}
      
    </div>
  )
}

export default ResponsiveTile
