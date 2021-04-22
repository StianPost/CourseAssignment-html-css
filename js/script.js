const gameAPI =
  "https://noroffcors.herokuapp.com/http://postal.one/wp-json/wc/store/products";
const loading = document.querySelector(".loading");
const FGames = document.querySelector(".featuredGames");

async function getGameAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    loading.innerHTML = "";

    FGames.innerHTML = `
      <div class="gameCard cardMain">
        <h1>Hello ${result[0].name}</h1>
      </div>
      <div class="gameCards">
      </div>
      `;
    for (let i = 1; i < 7; i++) {
      console.log([i]);
      document.querySelector(".gameCards").innerHTML += `
      <div class="gameCard Card${[i]}">
      <h1>Hello ${result[i].name} </h1>
      </div>
      `;
    }
  } catch (error) {
    console.log(error);
    document.querySelector(".alert").innerHTML = showAlertTouser(
      error,
      "danger"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getGameAPI(gameAPI);

//Redesign website to use flexbox or learn how to use grids with api
