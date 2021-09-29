import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class App extends Component{

    constructor () {
        super ();
        this.state ={

            songs: []
        }



    
}

    componentDidMount() {
        axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(response => this.setState({songs:response.data}))
        .then(console.log(this.state.songs))
    }

    render() {
        return(

        <div>hello there!
           {/* <DisplaySongs />*/}
        </div>
        );


    }

    }






export default App;