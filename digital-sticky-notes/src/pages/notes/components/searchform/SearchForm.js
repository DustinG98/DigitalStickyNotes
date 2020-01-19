import React from 'react'
import { connect } from 'react-redux'
import './searchform.scss'

import SearchIcon from '@material-ui/icons/Search';

const SearchForm = (props) => {
    const { setSearchTerm, searchTerm } = props;

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className="searchFormInput">
            <SearchIcon fontSize="large" color="primary"/>
            <input  onChange={e => handleChange(e)} value={searchTerm}/>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })


export default connect(mapStateToProps)(SearchForm)