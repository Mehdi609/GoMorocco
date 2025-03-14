import React, { useEffect, useState } from 'react';
import API from './api'; // Import API instance

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await API.get('/news');
      console.log(response);
      setNews(response.data); // Set the fetched news data
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <a href={`/news/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.published_at}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;