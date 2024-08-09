// JS for the search box //
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-bar input');
  const searchSuggestions = document.createElement('div');
  searchSuggestions.id = 'searchSuggestions';
  document.querySelector('.search-bar').appendChild(searchSuggestions);

  // List of pages to search (you can expand this list)
  const pages = [
    { title: 'Article1', url: '../BMP-wiki/articles/article1.html' },
    { title: 'Article2', url: '../BMP-wiki/articles/article2.html' },
    { title: 'Article3', url: '../BMP-wiki/articles/article3.html' }
  ];

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const suggestions = pages.filter(page =>
      page.title.toLowerCase().includes(searchTerm)
    );

    showSuggestions(suggestions);
  });

  function showSuggestions(suggestions) {
    searchSuggestions.innerHTML = '';

    if (suggestions.length === 0 || searchInput.value.trim() === '') {
      searchSuggestions.style.display = 'none';
      return;
    }

    searchSuggestions.style.display = 'block';

    const maxSuggestions = 5;
    suggestions.slice(0, maxSuggestions).forEach(suggestion => {
      const link = document.createElement('a');
      link.href = suggestion.url;
      link.textContent = suggestion.title;
      searchSuggestions.appendChild(link);
    });
  }

  // Close suggestions when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-bar')) {
      searchSuggestions.style.display = 'none';
    }
  });
});