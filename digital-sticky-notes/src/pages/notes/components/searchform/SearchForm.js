import React from 'react'
import { connect } from 'react-redux'

const SearchForm = (props) => {
    const { setSearchTerm, searchTerm } = props;

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div>
            <input onChange={e => handleChange(e)} value={searchTerm}/>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })


export default connect(mapStateToProps)(SearchForm)