import React from 'react';


function MusicTable(props) {
    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Album</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songlist.map((song) =>{
                    return(
                        <tr>
                            <td scope="row">{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.releaseDate}</td>
                        </tr>
                    ); 
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default MusicTable;