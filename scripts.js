function toggleCredits() {

    /*Gets credits const*/
    const credits = document.getElementById("credits");
    const computedStyle = window.getComputedStyle(credits);

    /*Toggles visibility*/
    if (computedStyle.visibility === "hidden") {
        credits.style.visibility = "visible";
    } else {
        credits.style.visibility = "hidden";
    }

    /*- disclaimer const -*/
    const disclaimerone = document.getElementById("disclaimerone");
    const computedStyleone = window.getComputedStyle(disclaimerone);

    /*Same here*/
    if (computedStyleone.visibility === "hidden") {
        disclaimerone.style.visibility = "visible";
    } else {
        disclaimerone.style.visibility = "hidden";
    }
}
