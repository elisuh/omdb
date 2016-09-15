class MovieView extends React.Component {

render() {
  let movie = this.props.data
  return (
    <div id="movie-container">
    <h2>{movie.Title} - {movie.Year}</h2>
      <img src={movie.Poster} />
    </div>
    )}

}
