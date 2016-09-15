class AppView extends React.Component {
constructor(){
  super()
  this.state = {
    movie: []
  }
this.updateSearchResults = this.updateSearchResults.bind(this);
}

updateSearchResults(results) {
      this.setState({
        movie: results
      })
    }


render (){
  return (
  <div>
  <SearchBarView searchedMovie={this.updateSearchResults}/>
  <MovieView movie={this.state.movie}/>
  </div>
    )
}










}

