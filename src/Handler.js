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

    onSearchHandler = event => {
        let holder
        event.target.value.toString() === "" ? this.setState({ MovieList: MoviesList }) : holder = this.state.MovieList.filter(el => el.title.toLowerCase().includes(event.target.value.toString().toLowerCase()));
        holder && this.setState({ MovieList: holder })
        console.log(holder)
    }

    handler = movie => this.setState({ MovieList: [...this.state.MovieList, movie] });

    render() {
        console.log(this.state.filter)
        return (
            <div>
                <Myheader search={this.onSearchHandler} />
                <Movies MovieList={this.state.MovieList} handler={this.handler} filter={this.state.filter} />
                <Movie handler={this.handler} />
            </div>
        )
    }
}

export default Handler