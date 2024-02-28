const toggles = document.getElementsByClassName("toggle");
const contentDiv = document.getElementsByClassName("content");
const icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    console.log(parseInt(contentDiv[i].style.height));
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "rebeccapurple";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "111130";
      icons[i].classList.add("fa-plus");
      icons[i].classList.remove("fa-minus");
    }
    for (let j = 0; j < contentDiv.length; j++) {
      if (j != i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "111130";
        icons[j].classList.add("fa-plus");
        icons[j].classList.remove("fa-minus");
      }
    }
  });
}
