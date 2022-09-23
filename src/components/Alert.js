import React from 'react'
// import PropTypes from 'prop-types'


export default function Alert(props) {
  return (
    props.alert && <div>
      <div className="alert alert-success" role="alert">{props.alert.message}</div>      
    </div>
  )
}
