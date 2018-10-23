// Speed Limit = 70
// 5 -> 1point
// Math.floor(1.3)
// 12 points -> suspended

//Ok
//Point: 2
//License suspended


//My Solution
// checkSpeed(70, 70);

// function checkSpeed(speed, limit) {
//     let message;
//     let points = Math.floor((speed - limit) / 5);
//     if (points === 0) message = 'Okay';
//     if (points >= 1) message = 'Points: ' + points;
//     if (points >= 12) message= 'License suspended';

//     console.log(message)
// }


//Final
checkSpeed(70);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) console.log('Ok');
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) console.log('License suspended');
        else console.log('Points', points);
    }
}

//Or 
checkSpeed(70);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License suspended');
    else console.log('Points', points);
}