class SearchBarView extends React.Component {
constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
  e.preventDefault();
  var title = this.refs.title.value,
  searchContent = this.refs.title;
  $.ajax({
    method: 'GET',
    url:`http://www.omdbapi.com/?t=${title}&y=&plot=short&tomatoes=true&r=json`
  }).done((response) => {
    this.props.searchedMovie(response);
    searchContent.value = ""
  })
}



render() {
  return (
    <div id="search-container">
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref="title" id="search" placeholder="Search by movie title" type="text" />
      </form>
    </div>
    )}

}
