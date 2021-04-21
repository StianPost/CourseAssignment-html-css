const gameAPI =
  "https://noroffcors.herokuapp.com/http://postal.one/wp-json/wc/store/products";
const loading = document.querySelector(".loading");

async function getGameAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    loading.innerHTML = "";

    result.forEach((element) => {}); // Make this into a for loop
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
