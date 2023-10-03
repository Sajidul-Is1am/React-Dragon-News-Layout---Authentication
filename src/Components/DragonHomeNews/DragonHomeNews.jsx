import { useEffect, useState } from "react";
import NewsItem from "../BreakingNews/NewsItem";

const DragonHomeNews = () => {
    const [news,setNews] = useState([])

    useEffect(() =>{
        fetch('/news.json')
        .then(res =>res.json())
        .then(data =>setNews(data))
    },[])
    return (
        <div className="h-[1600px] overflow-scroll">
            {
                news.map(newsItem => <NewsItem key={newsItem.id} news={newsItem}></NewsItem>)
            }   
        </div>
    );
};

export default DragonHomeNews;