var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// sliding test
const track = document.getElementById("portfolio");

window.onscroll = () => {
    // Get the scroll position of the page
    const scrollPosition = window.scrollY;  // Get the vertical scroll position

    // Calculate the percentage based on the scroll position
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;  // Total scrollable area
    const percentage = (scrollPosition / maxScroll) * -100;  // Calculate the percentage of scrolling

    // Clamp the percentage to stay within the bounds of -100 and 0
    const nextPercentage = Math.min(Math.max(percentage, -100), 0);

    // Apply the transform to the portfolio track
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // Animate the objectPosition of each image in the portfolio
    for (const image of track.getElementsByClassName("image-portfolio")) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
};
