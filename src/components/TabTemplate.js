import React, { PropTypes } from 'react'
import If from './If'

const TabTemplate = ({children, selected}) => {
  return <If condition={selected} children={children} />
}

TabTemplate.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool
}

export default TabTemplate
