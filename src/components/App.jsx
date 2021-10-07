import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import SongForm from './SongForm/SongForm';
class App extends Component{

    constructor () {
        super ();
        this.state ={
            sfield: "",
            songs: [],
            test: "",
            newTitle: "",
            newAlbum: "",
            newArtist: "",
            newGenre: "",
            newDate: ""
        }
    }

    
    componentDidMount() {
        axios.get('http://localhost:3000/api/songs')
        .then(response => this.setState({songs:response.data}))
    }
    handleSearch = (event) => {
        this.setState({sfield: event.target.value.toLowerCase()});
    }
    newTitle = (event) => {
        this.setState({newTitle: event.target.value});
    }
    newAlbum = (event) => {
        this.setState({newAlbum: event.target.value});
    }
    newArtist = (event) => {
        this.setState({newArtist: event.target.value});
    }
    newGenre = (event) => {
        this.setState({newGenre: event.target.value});
    }
    newDate = (event) => {
        this.setState({newDate: event.target.value});
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
            <SongForm title={this.newTitle} album={this.newAlbum} artist={this.newArtist} genre={this.newGenre} date={this.newDate} />

         
            
        </div>
        );


    }

}






export default App;