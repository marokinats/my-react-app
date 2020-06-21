import React from 'react';

// to add Component classes
export default (Component, className) => {
  return props => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    )
  }
}

