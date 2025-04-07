// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    let ramContainer = ce('div');
    ramContainer.style.display = 'flex';
    ramContainer.style.flexDirection = 'row';
    ramContainer.style.alignItems = 'center'; // make button and text align neatly
    ramContainer.style.gap = '10px'; // add space between elements
    subDiv.append(ramContainer);

    //-//

    let ramTitle = ce("h1");
    ramTitle.textContent = "Ram";
    ramContainer.append(ramTitle);

    //-//

    let showFreeMemButton = ce("button");
    showFreeMemButton.textContent = "Check Free Memory";
    showFreeMemButton.style.flex = "0 1 auto"; // prevent the button from stretching
    showFreeMemButton.onclick = function()
    {
        ge('memory-info').textContent = getFreeRam();
    };
    ramContainer.append(showFreeMemButton);

    //-//

    let memoryInfo = ce("p");
    memoryInfo.id = "memory-info";
    memoryInfo.style.margin = "0"; // remove any extra margins
    ramContainer.append(memoryInfo);

    //-//

    let sendEmailButton = ce("button");
    sendEmailButton.textContent = "Send Email";
    sendEmailButton.onclick = function()
    {
        sendEmail();
    };
    ba(sendEmailButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

