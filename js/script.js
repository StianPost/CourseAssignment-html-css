const gameAPI =
  "https://noroffcors.herokuapp.com/http://postal.one/wp-json/wc/store/products";
const loading = document.querySelector(".loading");

async function getGameAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const resultArray = result.data;
    console.log(resultArray);
    loading.innerHTML = "";

    resultArray.forEach((element) => {});
  } catch (error) {
    console.log(error);
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured",
      "danger"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getGameAPI(gameAPI);
