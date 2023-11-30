let selectBuilt = document.getElementsByTagName("section");
let i = 1;
console.log(selectBuilt);

window.addEventListener("scroll", () => {
    console.log(scrollY);
    if (scrollY >= 350) {
        selectBuilt[1].style.left = "0";
    }
    if (scrollY >= 900) {
        selectBuilt[2].style.left = "0";
    }
    if (scrollY >= 1250) {
        selectBuilt[3].style.left = "0";
    }
});


/*-----------------css
#built {
  padding: 1rem;
  text-align: center;
  background: #5d5d5d;
  background: linear-gradient(to bottom, #1b1a1a 0%, #778385 50%, #ffffff 100%);
  position: relative;
  left: -1000px;
  transition: 2s;
}*/