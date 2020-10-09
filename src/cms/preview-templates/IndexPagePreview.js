import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (

      <div className="preview-index-page">
        <IndexPageTemplate
          projects={data.projects || []}
          HeroStatement={data.HeroStatement}
          ShowreelCTA={data.ShowreelCTA}
          videoUrl={data.videoUrl}
          blurbs={data.blurbs}
          featuredProjects={data.featuredProjects || [] }
        />       
      </div>

    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
