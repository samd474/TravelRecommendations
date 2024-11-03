document.querySelector('.search-bar button:nth-child(2)').addEventListener('click', () => {
    document.querySelector('.search-bar input').value = '';
});
function clearSearch() {
    document.getElementById('searchInput').value = '';
}
