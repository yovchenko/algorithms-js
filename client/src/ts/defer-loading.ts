const temp = document.getElementsByTagName("template")[0];
const clon = temp.content.cloneNode(true);
document.getElementsByTagName("main")[0].appendChild(clon);
