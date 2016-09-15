class MovieResultsView extends React.Component {

  render() {
  return(
      <div id="movies-container">
    <ul>
    {
      this.props.movies.map((movie, index) => {
        return (<MovieView key={index} data={movie} />)
      })
    }
    </ul>
    </div>
    )
  }

}

