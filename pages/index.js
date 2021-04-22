import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveContainer from './layouts/responsive_container'
import Intro from '@/components/intro'
import Resume from '@/components/resume/resume'
import Projects from '@/components/projects/projects'
import PhotoGallery from '@/components/photo-gallery/photo-gallery'
import Contact from '@/components/contact'
import loadPhotoGallery from './api/load-photo-gallery'
import loadProjects from './api/load-projects'
import loadResumes from './api/load-resumes'

import 'pure-react-carousel/dist/react-carousel.es.css'

const HomepageLayout = ({ photos, projects, resumes }) => {
  return (
    <ResponsiveContainer>
      <Intro />
      {resumes && <Resume list={resumes} />}
      {projects && <Projects list={projects} />}
      {photos && <PhotoGallery photos={photos} />}
      <Contact />
    </ResponsiveContainer>
  )
}

HomepageLayout.propTypes = {
  photos: PropTypes.array,
  projects: PropTypes.array,
  resumes: PropTypes.array
}

export async function getStaticProps() {
  const photoGallery = (await loadPhotoGallery()) || []
  const projects = (await loadProjects()) || []
  const resumes = (await loadResumes()) || []

  return {
    props: {
      photos: photoGallery,
      projects: projects,
      resumes: resumes
    }
  }
}

export default HomepageLayout
