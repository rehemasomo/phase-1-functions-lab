// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}
function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264
}

function distanceTravelledInFeet(start,destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start,destination) {
    const distance = distanceTravelledInFeet(start,destination);
    let fare = 0;

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare =(distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return parseFloat(fare.toFixed(2));//Convert the fare to a number
}
module.exports={
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};