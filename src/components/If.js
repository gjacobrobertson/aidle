import React from 'react'

export default ({ condition, children, ...props }) => {
  if (condition) {
    return React.cloneElement(children, props)
  } else {
    return null
  }
}
