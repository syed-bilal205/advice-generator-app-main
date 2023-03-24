let advice = document.querySelector(".advicePara");
let btn = document.querySelector(".dice");
let adviceNO = document.querySelector(".adviceNo");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip);
      adviceNO.innerHTML = "ADVICE" + "#" + data.slip.id;
      advice.innerHTML = '"' + data.slip.advice + '"';
    });
});
