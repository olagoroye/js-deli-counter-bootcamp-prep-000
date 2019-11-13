
function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
  
}



  
function nowServing(katzDeliLine){
  if (katzDeliLine.length >0){
   return `Currently serving ${katzDeliLine.shift()}.`;}
  
  else{
  return "There is nobody waiting to be served!";
  
   }
   

  }

function currentLine(Line){
  var outputString;
if (line.length === 0){
outputString = "The line is currently empty.";
}
else{
outputString = "The line is currently: ";

for(var i = 0; i < line.length ; i++){
if (i === 0){

outputString = outputString + (i+1) + "." + line[i];
}
else{
outputString = outputString + "," + (i+1) + "." + line[i];
}
}
}
return outputString;
}

  

  

