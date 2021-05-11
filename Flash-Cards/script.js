let i = { value: 0 };
cards = [
  { front: "HTML stands for", back: "Hyper Text Markup Language" },
  { front: "CSS stands for", back: "Cascading Style Sheet" },
  { front: "JS stands for", back: "Java Script" },
  { front: "React is a", back: "Frontend Library" },
  { front: "Angular is a", back: "Frontend Framework" },
];

function card(k) {
  i.value += k;
  if (i.value == cards.length) {
    i.value = 0;
  } else if (i.value < 0) {
    i.value = cards.length - 1;
  }
  display(i);
}

display(i);

function display(ind) {
  let k = ind.value;
  document.getElementById("flip-card-front").innerHTML = cards[k].front;
  document.getElementById("flip-card-back").innerHTML = cards[k].back;
}

const fc = document.getElementById("flip-card-inner");
fc.addEventListener(
  "click",
  function () {
    fc.classList.toggle("flip");
  },
  false
);