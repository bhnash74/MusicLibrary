import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';

class App extends Component{

    constructor () {
        super ();
        this.state ={

            songs: []
        }

}
    componentDidMount() {
        axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(response => this.setState({songs:response.data},()=>console.log(this.state.songs)))
    }

    render() {
        return(
          

        <div>
            <NavBar /> 
            <SearchBar />
            <MusicTable songlist= {this.state.songs} />
         
            
        </div>
        );


    }

    }






export default App;