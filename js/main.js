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
