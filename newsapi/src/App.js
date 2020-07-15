import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard/NewsCard';

import './App.css';

function App() {
  const [topic, setTopic] = useState('COVID-19');
  const [allNews, setAllNews] = useState([]);
  
  
  useEffect(() => {

    let url = "http://newsapi.org/v2/everything?q="+topic+"&sortBy=publishedAt&apiKey=e9c629b87f094c91bab0164667951fad&language=en";
    //console.log(url);
    async function fetchNews() {
      let response = await fetch(url);
      response = await response.json();
      //console.log(response);
      setAllNews(response.articles);
    }
 
    fetchNews();
  },[topic]);

  let topicTxtBox = React.createRef();

  //const newsItems = ;
  function handleSubmit(e){
    setTopic(topicTxtBox.current.value);
  }



  return (
    
    <div className="App">
      
      <h1>News about {topic}</h1>
        <input ref={topicTxtBox} name='story' id='story' />
        <p>
          <input  type='button' value='Fetch News' onClick={handleSubmit}/>
        </p>
        
        {allNews.map((news, i)=><NewsCard key={i} news={news}/>)}
        
    </div>
  );

  
}


export default App;
