import PropTypes from 'prop-types'
import React from 'react'
import { Image, Modal, TransitionablePortal } from 'semantic-ui-react'

const ProjectImages = ({ images }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeImage, setActiveImage] = React.useState(0)

  return (
    <Image.Group size="small">
      {images.map((item, iIndex) => (
        <span key={`${iIndex}i`}>
          <Image
            src={process.env.NEXT_PUBLIC_CMS_HOST + item.formats.small.url}
            alt={item.alternativeText}
            bordered
            rounded
            onClick={() => {
              setActiveImage(iIndex)
              setIsOpen(true)
            }}
          />
          <TransitionablePortal open={isOpen} transition={{ animation: 'scale', duration: 300 }}>
            <Modal
              basic
              closeIcon
              dimmer="blurring"
              size="large"
              open={true}
              onClose={() => setIsOpen(false)}>
              <Modal.Content image>
                <Image
                  centered
                  src={process.env.NEXT_PUBLIC_CMS_HOST + images[activeImage].url}
                  alt={images[activeImage].alternativeText}
                />
              </Modal.Content>
            </Modal>
          </TransitionablePortal>
        </span>
      ))}
    </Image.Group>
  )
}

// ProjectImages.defaultProps = {
//   size: 'small'
// }

ProjectImages.propTypes = {
  images: PropTypes.array
}

export default ProjectImages
