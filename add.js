if (navigator.platform === "New Nintendo 3DS") {
  addTREEDS()
} else if (navigator.platform === "Nintendo 3DS") {
  addTREEDS()
} else {
  console.log('у тебя не консоль семейтсва 3DS :D');
}
function addTREEDS() {
  var link = document.createElement( "link" );
  link.href = '/igor360website/3ds.css';
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
}
