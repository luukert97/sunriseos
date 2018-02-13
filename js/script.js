// All elements who have class="drag" will be draggable
$(document).ready(function() {
    $(".drag").draggable();
});

function hideApp(myElement) {
    /* Hide element `myElement` from view */
    document.getElementById(myElement).style.visibility = "hidden";
}

function showApp(myElement) {
    /* Bring element `myElement` into view */
    document.getElementById(myElement).style.visibility = "visible";
}

function hideAll(allApps) {
    /* Hide all elements from view */
    for (var i = 0; i < allApps.length; i += 1) {
            hideApp(allApps[i]);
    }
}

function showAll(allApps) {
    /* Bring all elements into view */
    for (var i = 0; i < allApps.length; i += 1) {
        showApp(allApps[i]);
    }
}
