import { useState } from 'react'
import Modal from './Modal'
import css from './sass/tile.module.scss'

function Tile(props) {
  const {
    className,
    image,
  } = props
  const [openModal, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!openModal)
  }

  return (
    <div
      className={css.tile}
      onClick={ toggleModal }
    >
      <img
        className={css.image}
        src={image.thumb}
      />
      { openModal && (
        <Modal onClick={ toggleModal }>
          <img src={image.full} />
        </Modal>
      )}
    </div>
  )
}

export default Tile
