// getFreeRam.js

function getFreeRam()
{
    let os = require("os");

    // convert bytes to MB
    let freeMemory = os.freemem() / (1024 * 1024);

    let freeMemoryAdjusted = freeMemory.toFixed(2) + ' MB';

    return freeMemoryAdjusted;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

