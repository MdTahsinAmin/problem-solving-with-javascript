//Feet to Mile Conversion

function feetToMile(feet){
     
    if(feet < 0) return 'distance cannot be negative';
    else{
    var mile = feet/5280;
    }
    return mile;
}


// Wood Calculator

// one chair - 1ft^3 
// one Table - 3ft^3
// one Bed  -  5ft^3


function woodCalculator(howManyChair,howManyTable,howManyBed){

     if(howManyBed < 0 || howManyChair < 0 || howManyTable < 0 ) return 'object cannot be negative! try again.';
     else{
     var woodCount = (howManyChair*1)+(howManyTable*3)+(howManyBed*5);
     }
    return woodCount;
}



// Brick Calculator


function brickCalculator(floorNumber){
   var numberOfBrick = 0;
   
   if(floorNumber>0 && floorNumber<=10){
         numberOfBrick +=(floorNumber*15)*1000;
   }
   else if(floorNumber>10 && floorNumber<=20){
        var isIt= Math.abs(20-floorNumber);
        if(isIt == 0){
             numberOfBrick+=(floorNumber*12)*1000;
             numberOfBrick+=(10*15)*1000;
        }
        if(isIt > 0){
            numberOfBrick +=(10*15)*1000;
            numberOfBrick +=(isIt*12)*1000;
        }
   }
   else{
       var number  = Math.abs(floorNumber-20);
       if(number > 0){
           numberOfBrick+=(10*12)*1000;
           numberOfBrick+=(10*15)*1000;
           numberOfBrick+=(number*10)*1000;
       }
   }
   return numberOfBrick;
   
}




// Tiny Friends


function tinyFriend(friends){
  if(friends.length == 0) return 'array length is zero.'
 else{
  var leastLength = friends[0].length;
  var name = friends[0];
  for(var i = 1;i<friends.length;i++){
       if((friends[i].length)<leastLength){
            leastLength = friends[i].length;
            name = friends[i];
       }
  }
  return name;
}

}


