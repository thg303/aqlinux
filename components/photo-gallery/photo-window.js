import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Image, TransitionablePortal, Modal } from 'semantic-ui-react'

const PhotoWindow = ({ index, photos }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeImage, setActiveImage] = React.useState(0)

  return (
    <Slide index={index}>
      <Image.Group size="small" style={{ display: 'flex', justifyContent: 'center' }}>
        {photos.map((item, index) => (
          <span key={item.id}>
            <Image
              bordered
              rounded
              key={item.id}
              alt={item.photo.alternativeText}
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${item.photo.formats.small.url}`}
              onClick={() => {
                setActiveImage(index)
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
                    src={`${process.env.NEXT_PUBLIC_CMS_HOST}${photos[activeImage].photo.url}`}
                    alt={photos[activeImage].photo.alternativeText}
                  />
                </Modal.Content>
              </Modal>
            </TransitionablePortal>
          </span>
        ))}
      </Image.Group>
    </Slide>
  )
}

PhotoWindow.propTypes = {
  index: PropTypes.number.isRequired,
  photos: PropTypes.array
}

export default PhotoWindow
