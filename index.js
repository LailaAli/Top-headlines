//  const fetch = require( "node-fetch" );

const getNewsData = async () => {
  try {
    const response = await fetch( `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api_key}` );

    const data = await response.json();
    console.log( data.articles );
    createTopHeadlinesList( data.articles );
  } catch ( error ) {
    return console.log( error.message )
  }
}

const createTopHeadlinesList = ( articles ) => {

  document.getElementById( "list" ).innerHTML = `
  ${ articles.map( function ( item ) {
    return `
      <a href=${item.url} target=_blank class="articleLink">
        <div class="imageContainer"
        style="background: url(${item.urlToImage})"></div>
        <div class="content">
          <p class="date"> ${item.publishedAt} </p>
          <p class="title"> ${item.title} </p>
          <p class="excerpt">${item.description}</p>
        </div>
      </a>
  `
  }).join('')}
  `
}

getNewsData();