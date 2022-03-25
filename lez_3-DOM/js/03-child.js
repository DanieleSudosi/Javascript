var ulEL = document.querySelector('ul');

console.log(ulEL.firstElementChild);
console.log(ulEL.firstChild);

var itemDue = document.getElementById('due');
var eltext = itemDue.firstChild.nodeValue;
eltext = eltext.replace("Studiare", "Programmare");
itemDue.firstChild.nodeValue = eltext;

