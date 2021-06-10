import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) { 
    return(
        <div>
            {props.movies.map(movie => {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>
                                {movie.Title}
                            </Card.Title>
                            <Card.Text>
                                Released Date: {movie.Year}
                            </Card.Text>
                            <Card.Text>
                                Runtime: N/A
                            </Card.Text>
                            <Card.Text>
                                Genre: N/A
                            </Card.Text>
                            <Card.Text>
                                Director: N/A
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Movies;