import React from 'react';
import './SearchBar.css';
function SearchBar (props) {
      return (
            <div id = "sbar">
                <form className="form-inline">
                    <div className= "row form-group">
                        <div className= "col">
                            <input type="text" className="form-control" id="search_field" onChange={props.handleSearch} placeholder="Type here..." rows="1"/>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        
                    </div>
                </form>
            </div>
      );
  }
export default SearchBar;