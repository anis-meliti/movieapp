import React, { Component } from 'react'
import Movies from './Components/Movies/Movies'
import Myheader from './Components/Myheader/Myheader';
import Movie from './Components/Movies/Movie/Movie'
import MoviesList from './Components/assets/json/Movies.json'
import LoaderHOC from './Hoc/LoaderHOC';


class Handler extends Component {
    constructor() {
        super();
        this.state = {
            MovieList: MoviesList,
            isLoading: true
        }

    }

    onStarClick = (nextValue) => {
        let rate;
        nextValue === 1 ? this.setState({ MovieList: MoviesList }) : rate = this.state.MovieList.filter(el => el.rating === nextValue);
        rate && this.setState({ MovieList: rate })
    }
    onSearchHandler = event => {
        let holder
        event.target.value.toString() === "" ? this.setState({ MovieList: MoviesList }) : holder = this.state.MovieList.filter(el => el.title.toLowerCase().includes(event.target.value.toString().toLowerCase()));
        holder && this.setState({ MovieList: holder })
    }

    handler = movie => this.setState({ MovieList: [...this.state.MovieList, movie] });

    render() {
        return (
            <div>
                <Myheader search={this.onSearchHandler} rating={this.onStarClick} />
                <Movies MovieList={this.state.MovieList} handler={this.handler} filter={this.state.filter} />
                <Movie handler={this.handler} />
            </div>
        )
    }
}

export default LoaderHOC(Handler)