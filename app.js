document.addEventListener("DOMContentLoaded", function(){
  const baseURL = ''

  let userInput = document.getElementById('textArea');
  let movieForm = document.getElementById('movieForm');

  let movieArray = [];

  movieForm.addEventListener('submit', function(e){
    e.preventDefault();
    movieArray = userInput.value.split(',')
    console.log(movieArray);
    for (let i = 0; i < movieArray.length; i++) {
      // rankMovies(movieArray[i])
    }
  })

  // function to make fetch request to movie API
  function rankMovies(movieTitle) {
    const movie = `${baseURL}/${movieTitle}`

    return fetch(movie).then(response => response.json())
  }

})
