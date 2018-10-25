document.addEventListener("DOMContentLoaded", function(){
  console.log('loaded');

  const baseURL = ''

  let userInput = document.getElementById('textArea');
  let movieForm = document.getElementById('movieForm');

  let movieArray = ['fargo', 'goodfellas', 'grease'];

  movieForm.addEventListener('submit', function(e){
    console.log('movieform');
    e.preventDefault();
    movieArray = userInput.value.split(',')
    for (let i = 0; i < movieArray.length; i++) {
      // rankMovies(movieArray[i])
    }
  })

  document.getElementById("demoX").innerHTML += xxx;
  // // function test to place a list onto the page...
  // let buttonElement = document.getElementById('btn');
  //
  // buttonElement.addEventListener('click', () =>{
  //
  //   const wrapper = document.createElement('div');
  //   const x = document.getElementsByClassName("myClass");
  //
  //   console.log(x);
  //   console.log(wrapper);
  // });
  //
  //   //
  //   //   for(let i=0; i < x.length;++i){
  //   //   const newdiv = document.createElement('div');
  //   //     newdiv.appendChild(document.createTextNode(x[i].innerHTML));
  //   //     wrapper.appendChild(newdiv);
  //   // }
  //   //
  //   // document.body.appendChild(wrapper);
  // })

  // function to make fetch request to movie API
  function rankMovies(movieTitle) {
    const movie = `${baseURL}/${movieTitle}`
    console.log('This is the fetch log');

    // return fetch(movie).then(response => response.json())
  }

})
