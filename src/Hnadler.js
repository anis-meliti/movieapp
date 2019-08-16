import React, { Component } from 'react'
import Movies from './Components/Movies/Movies'
import Myheader from './Components/Myheader/Myheader';
import Movie from './Components/Movies/Movie/Movie'
import MoviesList from './Components/assets/json/Movies.json'


class Handler extends Component {
    constructor() {
        super();
        this.state = {
            MovieList: MoviesList,
        }
    }

    handler = (movie) => {
        this.setState({ MovieList: [...this.state.MovieList, movie] })
    }
    render() {
        return (
            <div>
                <Myheader />
                <Movies MovieList={this.state.MovieList} handler={this.handler} />
                <Movie handler={this.handler} />
            </div>
        )
    }
}

export default Handler