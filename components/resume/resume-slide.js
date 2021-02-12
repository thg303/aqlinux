import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Icon, Item } from 'semantic-ui-react'

const ResumeSlide = ({ index, data, description, techIcons }) => (
  <Slide index={index}>
    <Item.Group divided>
      <Item>
        <Item.Image
          src={data.image}
          className="shadowPicture"
          size="medium"
          as="a"
          href={data.imageLink}
          target="_blank"
          rel="noopener noreferrer"
        />
        <Item.Content>
          <Item.Header>
            <a href={data.href} target="_blank" rel="noopener noreferrer">
              {data.firm}
            </a>
          </Item.Header>
          <Item.Meta>
            <span className="cinema">{data.job}</span>
            <br />
            <span style={{ fontStyle: 'italic' }}>{data.duration}</span>
          </Item.Meta>
          <Item.Description>{description}</Item.Description>
          <Item.Extra>
            {techIcons.map((item, tIndex) => (
              <a
                key={tIndex}
                style={{ marginRight: '0.5em' }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer">
                <Icon index={tIndex} name={item.iconName} />
                {item.title}
              </a>
            ))}
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Slide>
)

ResumeSlide.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    firm: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
  }),
  description: PropTypes.node.isRequired,
  techIcons: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}

export default ResumeSlide
