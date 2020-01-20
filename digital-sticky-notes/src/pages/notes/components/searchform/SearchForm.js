import React from 'react'
import { connect } from 'react-redux'
import './searchform.scss'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'; 

import SearchIcon from '@material-ui/icons/Search';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2C6095"
        },
        secondary: {
          main: "#E33D3D"
      }
    }
  })

const SearchForm = (props) => {
    const { setSearchTerm, searchTerm } = props;

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className="searchFormInput">
            <ThemeProvider theme={theme}>
                <SearchIcon fontSize="large" color="primary"/>
            </ThemeProvider>
            <input  onChange={e => handleChange(e)} value={searchTerm} placeholder="Search Notebooks"/>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })


export default connect(mapStateToProps)(SearchForm)