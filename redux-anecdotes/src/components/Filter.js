import React from 'react'
import { connect } from 'react-redux'
import { filterWith } from '../reducers/filterReducer'

const Filter = ({ filterWith }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value
    filterWith(inputValue)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterWith
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
