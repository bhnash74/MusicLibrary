import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { sfield: '' };
      }
      searchInput = (event) => {
        this.setState({sfield: event.target.value});
      }
    render() {
      return (
            <div id = "sbar">
                <form className="form-inline">
                    <div className= "row form-group">
                        <div class= "col">
                            <textarea className="form-control" id="search_field" onChange={this.searchInput} placeholder="Type here..." rows="1"></textarea>
                        </div>
                        <div class="col-sm-2">
                            <button onClickCapture>Search</button>
                        </div>
                    </div>
                </form>
            </div>
      );
    }
  }
export default SearchBar;