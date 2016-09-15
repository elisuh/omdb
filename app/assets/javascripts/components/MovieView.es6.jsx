class MovieView extends React.Component {
constructor(){
  super()
  this.state = {
    movie: []
  }
}

render() {
  let movie = this.props.movie
  return (
    <div id="movie-container">
      <img src={movie.Poster} />
      <h2>{movie.Title}</h2>
      {movie.Year}<br />
      {movie.Genre}<br />
      {movie.Plot}<br /><br />
      {movie.tomatoConsensus}
    </div>
    )}

}
