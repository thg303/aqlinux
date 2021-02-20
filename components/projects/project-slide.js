import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import ProjectImages from './project-images'

const ProjectSlide = ({ index, data, description, techIcons, images }) => (
  <Slide index={index}>
    <Item.Group divided>
      <Item>
        <Item.Content>
          <Item.Header>
            {data.link ? (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                {data.title}
              </a>
            ) : (
              data.title
            )}
          </Item.Header>
          <Item.Meta>
            <span className="cinema" style={{ display: 'inline-block', marginBottom: '1em' }}>
              {data.creationDate}
            </span>
            <br />
            {data.tags.map((tag, tIndex) => (
              <Label key={tIndex}>{tag}</Label>
            ))}
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
                <span className={item.iconName} />
                {item.title}
              </a>
            ))}
          </Item.Extra>
          <Item.Description>
            <ProjectImages images={images} />
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Slide>
)

ProjectSlide.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    tags: PropTypes.array,
    link: PropTypes.string.isRequired,
    linkCaption: PropTypes.string.isRequired,
    shortDuration: PropTypes.string
  }),
  description: PropTypes.node.isRequired,
  techIcons: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  )
}

export default ProjectSlide
