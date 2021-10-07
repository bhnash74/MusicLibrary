import React from 'react';
import './SongForm.css';

function SongForm(props) {
    return (
        <div>
            <form className="form-inline">
                <div className= "row form-group">
                    <div className= "col-md-4">
                        <div className="row">
                            <input type="text" className="form-control" onChange={props.title} placeholder="Title"/>
                        </div>
                        <div className="row">
                            <input type="text" className="form-control" onChange={props.genre} placeholder="Genre"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <input type="text" className="form-control" onChange={props.album} placeholder="Album"/>
                        </div>
                        <div className="row">
                            <input type="text" className="form-control" onChange={props.artist} placeholder="Artist"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <input type="text" className="form-control" onChange={props.date} placeholder="Release Date"/>
                        </div>
                        <div className="row">
                            <button type= "button" className="btn btn-dark" onSubmit={props.inputSong}>Submit</button>
                        </div>
                    </div>
                </div>
                </form> 
        </div>
    );
}
export default SongForm;