

function distanceFromHqInBlocks(pickUp= 34){
    let hq = 42;
    return Math.abs(pickUp - hq); 
}

function distanceFromHqInFeet(pickUp = 50, hq = 42){
    let disBlock = pickUp - hq; 
    let inFeet = disBlock * 264; 
    return Math.abs(inFeet); 
}

function distanceTravelledInFeet(start = 50, end = 60){
    let disBlock = end - start; 
    let inFeet = disBlock * 264; 
    return Math.abs(inFeet);
}

function calculatesFarePrice(start = 34, end = 24){
    let tBlocks = end - start; 
    let feet = Math.abs(tBlocks) * 264; 
    if(feet <= 400){
        return 0; 
    } else if (feet > 400 && feet < 2000){
        let feetAfterFree = feet - 400; 
        return feetAfterFree * .02; 
    } else if(feet > 2000 && feet < 2500){
        return 25; 
    } else{
        return 'cannot travel that far'
    }
}