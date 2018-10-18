document.addEventListener("DOMContentLoaded", function(){

  let userInput = document.getElementById('textArea');
  let movieForm = document.getElementById('movieForm');

  let movieArray = [];

  movieForm.addEventListener('submit', function(e){
    e.preventDefault();
    movieArray = userInput.value.split(',')
    console.log(movieArray);
    // rankMovies(movieArray)
  })

  rankMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
      
    }
  }

})
