




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from './api'; // Import API instance

const NewsDetail = () => {
  const { id } = useParams(); // Get the ID of the news article
  const [newsItem, setNewsItem] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      const response = await API.get(`/news/${id}`);
      setNewsItem(response.data.news);
      setRelatedNews(response.data.relatedNews);
    };
    fetchNewsDetail();
  }, [id]);

  if (!newsItem) return <div>Loading...</div>;

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <img src={newsItem.image} alt={newsItem.title} />
      <p>{newsItem.published_at}</p>
      <p>{newsItem.description}</p>

      <h3>Related News</h3>
      <ul>
        {relatedNews.map((item) => (
          <li key={item.id}>
            <a href={`/news/${item.id}`}>
              <h4>{item.title}</h4>
              <p>{item.published_at}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsDetail;