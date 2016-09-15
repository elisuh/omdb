class MovieView extends React.Component {

render() {
  let movie = this.props.data
  return (
    <div id="movie-container">
    <h2>{movie.Title} - {movie.Year}</h2>
      { movie.Poster != 'N/A' ? <img src={movie.Poster} />
      : <img src='images/sadkitten.jpg'/> }
    </div>
    )}

}
