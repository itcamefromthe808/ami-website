import { useState } from 'react'
import Modal from './Modal'
import { combineClasses } from './utilities'
import css from './sass/tile.module.scss'

function Tile(props) {
  const {
    className,
    image,
    folder
  } = props
  const [openModal, setModalState] = useState(false)

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
        src={`${folder}${image.thumb}`}
      />
      { openModal && (
        <Modal
          onClick={ toggleModal }
        >
          <img src={`${folder}${image.full}`} />
        </Modal>
      )}
    </div>
  )
}

export default Tile
