document.addEventListener('DOMContentLoaded', () => {
    // Get the current review count from localStorage, defaulting to 0 if it doesn't exist
    let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

    // Increment the count
    reviewCount++;

    // Save the updated count back to localStorage
    window.localStorage.setItem("reviewCount", reviewCount);

    // Display the updated count on the page
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
});
