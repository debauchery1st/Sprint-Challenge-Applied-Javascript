// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function Card(article) {
    // create
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const authorName = document.createElement('span');
    // assign
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = article.headline;
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    cardImg.src = article.authorPhoto;
    authorName.textContent = article.authorName;
    // assemble
    imgDiv.appendChild(cardImg);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorName);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    return cardDiv;
}

const cardsContainer = document.getElementsByClassName('cards-container').item(0);
const cardsPromise = new axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(a => {
    Object.keys(a.data.articles).forEach(topic => {
        a.data.articles[topic].forEach(art => {
            cardsContainer.appendChild(Card(art));
        });
    })
    return a
})
