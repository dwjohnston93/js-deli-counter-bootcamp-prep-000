
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing(katzDeliLine){
  if (katzDeliLine === []) {
    return "There is nobody waiting to be served!";
  } else { 
  var currentName = katzDeliLine.shift(); 
  return `Currently serving ${currentName}.`; 
  }
}

function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine === []) {
    return "The line is currently empty.";
  } else {
    for (var i=0; i<katzDeliLine.length; i++){
      line += `${[i]}. ${katzDeliLine[i]},`; 
    }
  } return `The line is currently: ${line}`;
}

