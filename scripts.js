function toggleCredits() {
    const credits = document.getElementById("credits");
    const computedStyle = window.getComputedStyle(credits);

    if (computedStyle.visibility === "hidden") {
        credits.style.visibility = "visible";
    } else {
        credits.style.visibility = "hidden";
    }

    const disclaimerone = document.getElementById("disclaimerone");
    const computedStyleone = window.getComputedStyle(disclaimerone);

    if (computedStyleone.visibility === "hidden") {
        disclaimerone.style.visibility = "visible";
    } else {
        disclaimerone.style.visibility = "hidden";
    }
}
