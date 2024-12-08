// This script will be used to generate the article list dynamically
const articleList = document.querySelector('ul');

// Sample article data
const articles = [
  { title: 'Article 1', content: 'This is the content of article 1' },
  { title: 'Article 2', content: 'This is the content of article 2' },
  { title: 'Article 3', content: 'This is the content of article 3' },
];

// Generate the article list
articles.forEach((article) => {
  const articleListItem = document.createElement('li');
  const articleLink = document.createElement('a');
  articleLink.href = `article.html?title=${article.title}`;
  articleLink.textContent = article.title;
  articleListItem.appendChild(articleLink);
  articleList.appendChild(articleListItem);
});
