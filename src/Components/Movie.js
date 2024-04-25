import React from "react";
import "../movieformat.css";
import { Button } from "react-bootstrap";

function Movie(props) {

    return (
        <div className="movie">
            <div className="movie-title">
                <h3>
                    <Button className="btn btn-primary btn-sm" onClick={() => {props.delHandler(props.id);}}>
                        Delete
                    </Button> 
                    <b> Movie Title: {props.title}</b>
                </h3>
            </div>

            <div className="director">
                <b>Director: {props.director}</b>
            </div>
                
            <div className="stars">
                Stars: {props.stars}
            </div>
        </div>
    );
}

export default Movie;
