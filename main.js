let contain = document.querySelector(".container");

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API);

fetch(API) // плучаем Promise , который обещает вернуть Response object
  // response  => Promise, который обещает вернуть данные в JSON формате
  .then((res) => res.json())
  //   отлавливаем успещный результат выполнения промиса при помощи Then
  .then((data) =>
    data.Search.forEach((item) => {
      contain.innerHTML += `<div class="newDiv">
      <img src="${item.Poster}"/>
<h3> <a href="${item.Poster}style=background-color'blue'">${item.Title}</a></h3>
<p>${item.Year}</p>
</div>`;
    })
  );
