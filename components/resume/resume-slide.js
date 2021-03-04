import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Icon, Item } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'

const ResumeSlide = ({ index, data }) => (
  <Slide index={index}>
    <Item.Group divided>
      <Item>
        <Item.Image
          src={process.env.NEXT_PUBLIC_CMS_HOST + data.image.formats.medium.url}
          className="shadowPicture"
          size="medium"
          as="a"
          href={process.env.NEXT_PUBLIC_CMS_HOST + data.image.url}
          target="_blank"
          alt={data.image.alternativeText}
          rel="noopener noreferrer"
        />
        <Item.Content>
          <Item.Header>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.firm}
            </a>
          </Item.Header>
          <Item.Meta>
            <span className="cinema">{data.job}</span>
            <br />
            <span style={{ fontStyle: 'italic' }}>{data.duration}</span>
          </Item.Meta>
          <Item.Description>
            <ReactMarkdown>{data.description}</ReactMarkdown>
          </Item.Description>
          <Item.Extra>
            {data.icons.map((icon) => (
              <a
                key={icon.id}
                style={{ marginRight: '0.5em' }}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer">
                <Icon index={icon.id} name={icon.icon_name} />
                {icon.title}
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
  data: PropTypes.array
}

export default ResumeSlide
