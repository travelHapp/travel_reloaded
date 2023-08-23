document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form');

    searchIcon.addEventListener('click', function() {
        searchForm.submit();
    });
});