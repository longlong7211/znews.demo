import { useEffect, useState } from "react";
import HagtagComponent from "../components/homeComponent/HagtagComponent";
import HeaderComponent from "../components/homeComponent/HeaderComponent";
import '../components/homeComponent/HomeComponent.scss';
import './styles/HomePage.scss';
import { IoMdTrendingUp } from "react-icons/io";
import { getTopNews } from "../apis/HomeApi";
import CardImgLeft from "../components/homeComponent/CardImgLeft";
import CardImgTop from "../components/homeComponent/CardImgTop";

export default function HomePage() {
  const [listTrenddingNews, setListTreddingNews] = useState([]);
  async function getTrendingNews() {
    const listNews = await getTopNews();
    if (listNews && listNews.articles) {
      console.log(listNews)
      setListTreddingNews(listNews.articles);
    }
  }
  useEffect(() => {
    getTrendingNews();
  }, [])
  return <>
    <HeaderComponent />
    <div className="container d-flex mt-2">
      <div className="tredding-icon"><IoMdTrendingUp size={20} /></div>
      <HagtagComponent content={"Xuất bản và kỷ nguyên vươn mình của dân tộc"} />
      <HagtagComponent content={"Bầu cử tổng thống Mỹ 2024"} />
    </div>
    <div className="container d-flex top-news-container gap-3">
      <div className="col-3">
        {listTrenddingNews.slice(0, 5).map((news) => {
          return <CardImgLeft imgSrc={news.urlToImage} title={news.title} />
        })}
      </div>
      <div className="col-6">
        <CardImgTop isBig={true} imgSrc={listTrenddingNews[5].urlToImage} title={listTrenddingNews[5].title} desc={listTrenddingNews[5].description} />
      </div>
      <div className="col-3"></div>
    </div>
  </>
}