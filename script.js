
function searchContent() {
    let query = document.getElementById("searchInput").value.toLowerCase(); // Get the search input
    let content = document.querySelectorAll(".card-box"); // Get all the content boxes

    content.forEach(function(item) {
        let contentText = item.getAttribute("data-content").toLowerCase(); // Get the content text
        if (contentText.includes(query)) {
            item.style.display = "block"; // Show content if it matches
        } else {
            item.style.display = "none"; // Hide content if it doesn't match
        }
    });
}
