class MovieView extends React.Component {
constructor() {
    super();
    this.state = {
      details: null,
      showDetails: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

showDetails() {
  let shouldShow = !this.state.showDetails;
  if(shouldShow) {
    this.getDetails();
} else {
  this.setState({
    showDetails: shouldShow
  })
}
}

getDetails() {
  let imdbID = this.props.data.imdbID
  $.ajax({
    method: 'GET',
    url: `http://www.omdbapi.com/?i=${imdbID}`
  }).done((response) => {
    debugger
    this.setState({
        details: response,
        showDetails: true
      })
  })
}

render() {
  let movie = this.props.data
  return (
    <li onClick={this.showDetails}>
    <h2>{movie.Title} - {movie.Year}</h2>
      { movie.Poster != 'N/A' ? <img src={movie.Poster} />
      : <img src='images/sadkitten.jpg'/> }
      { this.state.showDetails ? <p>{this.state.details.Genre}<br/> {this.state.details.Plot}</p> : null}
    </li>
    )}

}
