import "../scss/index.scss";
import "bootstrap";
document.getElementById("header-button").addEventListener("click", function(e) {
  e.stopPropagation();
  const temp = document.getElementsByTagName("template")[0];
  const clon = temp.content.cloneNode(true);
  document.getElementsByTagName("main")[0].appendChild(clon);
});
