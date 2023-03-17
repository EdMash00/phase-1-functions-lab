function distanceFromHqInBlocks(location){
    const hq = 42;
        if (location > hq){
        return location - hq;
        } else {
        return hq - location 
    } 
}
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(location){
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(location);
    return distanceInBlocks * feetPerBlock;

}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = (destination - start);
    const distanceInFeetPerBlock = 264;
        if (destination < start){
            return distanceInBlocks * -1 * distanceInFeetPerBlock;
        } else{
            return  distanceInBlocks * distanceInFeetPerBlock;
        }
}
console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))


function calculatesFarePrice(start, destination){
    const distanceTravelledInFeet = (start - destination) * 264;
    const fare = (distanceTravelledInFeet - 400) * 0.02;
    if (distanceTravelledInFeet > 0 && distanceTravelledInFeet <= 400){
        return fare;

    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000){
        
        return fare;

    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
        return 25;

    } else {
        return 'cannot travel that far';  
    }
}
 console.log(calculatesFarePrice(43, 44));
 console.log(calculatesFarePrice(34,32));
 console.log(calculatesFarePrice(50, 58));
 console.log(calculatesFarePrice(34, 24));
   // Code your solution in this file!
