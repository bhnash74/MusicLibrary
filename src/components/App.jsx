import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';

class App extends Component{

    constructor () {
        super ();
        this.state ={
            sfield: "",
            songs: []
        }

}
    componentDidMount() {
        axios.get('http://localhost:3000/api/songs')
        .then(response => this.setState({songs:response.data},()=>console.log(this.state.songs)))
    }
    handleSearch = (event) => {
        this.setState({sfield: event.target.value.toLowerCase()},()=>console.log(this.state.sfield));
    }

    render() {
        let filterSearch = this.state.songs.filter(song=>{
            return (
                song.title.toLowerCase().includes(this.state.sfield) ||
                song.album.toLowerCase().includes(this.state.sfield) ||
                song.artist.toLowerCase().includes(this.state.sfield) ||
                song.genre.toLowerCase().includes(this.state.sfield) ||
                song.releaseDate.toLowerCase().includes(this.state.sfield) 
            )
        })
        return(
          

        <div>
            <NavBar /> 
            <SearchBar handleSearch= {this.handleSearch}/>
            <MusicTable songlist= {filterSearch} />
         
            
        </div>
        );


    }

    }






export default App;