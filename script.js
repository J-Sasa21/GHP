// Get the input element and search button
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(
  '.search-buttons input[type="submit"]'
);

// Function to handle the search
function handleSearch() {
  // Get the search query from the input field
  const searchQuery = searchInput.value.trim();

  // Perform the search logic)
  if (searchQuery) {
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
  }
}

//  event listener to the search button
searchButton.addEventListener("click", handleSearch);

//  handle search on pressing Enter key
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});
