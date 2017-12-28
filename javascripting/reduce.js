var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames)
