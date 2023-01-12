import React from 'react'

import PropTypes from 'prop-types'

import './section-heading.css'

const SectionHeading = (props) => {
  return (
    <div className={`section-heading-section-heading ${props.rootClassName} `}>
      <h2 className="section-heading-text Heading-2-JP">{props.heading}</h2>
      <span className="section-heading-text1">{props.subtitle}</span>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'Courses',
  subtitle:
    'We are currently offering the following courses. Pick one to get started.',
  rootClassName: '',
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading
