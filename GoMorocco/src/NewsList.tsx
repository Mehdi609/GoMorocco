

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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest News</h2>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <li key={item.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <a href={`/news/${item.id}`} className="block">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.published_at}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;