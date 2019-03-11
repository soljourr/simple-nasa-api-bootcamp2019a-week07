
document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=ZvdzSG4gDQNj1iFJkCkhZXiyOc6qZ1fshtdW7IUF`)
    .then(res => res.json())
  // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else{
          document.querySelector('iframe').src = response.url
        }
          document.getElementById('explanation').innerText = response.explanation;
          document.getElementById('date').innerText = response.date;

    })
    .catch(err => {
        console.log(`error ${err}`)
        // alert("sorry, there are no results for your search")
    });
}
