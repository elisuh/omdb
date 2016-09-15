class AppView extends React.Component {
constructor(){
  super()
  this.state = {
    movies: []
  }
this.updateSearchResults = this.updateSearchResults.bind(this);
}

updateSearchResults(results) {
      this.setState({
        movies: results['Search']
      })
    }


render (){
  return (
  <div>
  <SearchBarView searchQuery={this.updateSearchResults}/>
  <MovieResultsView movies={this.state.movies}/>
  </div>
    )
}










}

