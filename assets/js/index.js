fetch("./assets/modules/header.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("header").innerHTML = html));

fetch("./assets/modules/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".grid-item",
  columnWidth: 160,
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry(".grid", {
  // options
  gutter: 10,
});
