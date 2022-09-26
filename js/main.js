function contentEdited() {
  let name = document.getElementById("name").innerText;

  document.getElementById("avatar").src =
    "https://metadata.ens.domains/mainnet/avatar/" + name;
}

function contentFocus() {
  document.getElementById("avatar").src = "imgs/giphy.gif";
}

function submit(e) {
  console.log(e);

  if (e.which == 13) {
    console.log("You pressed enter!");
  }
}

function toggleVisible() {
  var x = document.getElementById("tag");
  if (x.src.slice(-11) === "img/tag.png") {
    x.src = "img/tag-blank.png";
  } else {
    x.src = "img/tag.png";
  }
}
