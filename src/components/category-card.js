import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'

const CategoryCard = (props) => {
  return (
    <div className={`category-card-category-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.category_img}
        className="category-card-image"
      />
    </div>
  )
}

CategoryCard.defaultProps = {
  category_img:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
  rootClassName: '',
}

CategoryCard.propTypes = {
  category_img: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CategoryCard
