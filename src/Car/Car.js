import React, { Fragment } from 'react';
import classes from './Car.module.scss';
import withClass from '../hoc/withClass';

const Car = props => {

  const inputClasses = [classes.input]

  if (props.name !== '') {
    inputClasses.push(classes.green)
  } else {
    inputClasses.push(classes.red)
  }

  if (props.name.length > 4) {
    inputClasses.push(classes.bold)
  }

  return (
    <Fragment>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </Fragment>
  )
}

export default withClass(Car, classes.Car)