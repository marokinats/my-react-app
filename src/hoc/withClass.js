import React from 'react';

// to add Component classes
const withClass = (Component, className) => {
  return props => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    )
  }
};

export default withClass;
