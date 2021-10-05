import React, { Component } from 'react';
import Stars from './Stars';

export default class MovieCard extends Component {
  render() {
    return (
      <div>
        <div className="container">
      <div className="movieCard">
        <img src="https://www.film.ru/sites/default/files/styles/thumb_120x170/public/movies/posters/1617794-1176129.jpeg" alt="movie img" className="movieImg" />
        <span className="movieName">Офицеры</span>
        <Stars count={5}/>
        <button>подробнее</button>
        <button>смотреть</button>
      </div>
      <div className="movieCard">
        <img src="https://www.film.ru/sites/default/files/styles/thumb_120x170/public/movies/posters/1617794-1176129.jpeg" alt="movie img" className="movieImg" />
        <span className="movieName">Офицеры</span>
        <Stars />
        <button>подробнее</button>
        <button>смотреть</button>
      </div>
      <div className="movieCard">
        <img src="https://www.film.ru/sites/default/files/styles/thumb_120x170/public/movies/posters/1617794-1176129.jpeg" alt="movie img" className="movieImg" />
        <span className="movieName">Офицеры</span>
        <Stars count={null}/>
        <button>подробнее</button>
        <button>смотреть</button>
      </div>
      </div>
      </div>
    )
  }
}
