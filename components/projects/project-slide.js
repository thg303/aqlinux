import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import ProjectImages from './project-images'

const ProjectSlide = ({ index, data }) => (
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
              {dayjs(data.creation_date).format('MMMM YYYY')}
            </span>
            <br />
            {data.tags.map((tag, tIndex) => (
              <Label key={tIndex}>{tag.name}</Label>
            ))}
          </Item.Meta>
          <Item.Description>
            <ReactMarkdown>{data.description}</ReactMarkdown>
          </Item.Description>
          <Item.Extra>
            {data.icons.map((item, tIndex) => (
              <a
                key={tIndex}
                style={{ marginRight: '0.5em' }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                <span className={item.icon_name} />
                {item.title}
              </a>
            ))}
          </Item.Extra>
          <Item.Description>
            <ProjectImages images={data.images} />
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
    creation_date: PropTypes.string.isRequired,
    tags: PropTypes.array,
    link: PropTypes.string,
    link_caption: PropTypes.string,
    description: PropTypes.node.isRequired,
    images: PropTypes.array,
    icons: PropTypes.array
  })
}

export default ProjectSlide
