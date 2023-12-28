fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("span").innerText = data.slip.id;
    document.querySelector("h1").innerText = `'${data.slip.advice}'`;
  });

document.querySelector("div").addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("span").innerText = data.slip.id;
      document.querySelector("h1").innerText = `'${data.slip.advice}'`;
    })
    .catch((error) => console.error("Error loading API:", error));
});
