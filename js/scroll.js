
document.addEventListener("scroll",
  (e) => {
    if (window.scrollY < 90) {
      document.querySelector("#logoHetic").style.width = "170px"
     // console.log(window.scrollY);
    } else if (window.scrollY > 90) {
      document.querySelector("#logoHetic").style.width = "125px"
    }
  }
)