import { FaSearch } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
export default function HeaderComponent() {
  return <div className="header-root">
    <div className="container d-flex justify-content-between">
      <div>
        <img src="/assets/picture/logo.png" alt="" height={60} />
      </div>
      <div className="d-flex list-title gap-3">
        <div className="title"><div>Xuất bản</div></div>
        <div className="title"><div>Tác giả</div></div>
        <div className="title"><div>Kinh doanh</div></div>
        <div className="title"><div>Thể thao</div></div>
        <div className="title"><div>Công nghệ</div></div>
        <div className="title"><div>Sức khoẻ</div></div>
        <div className="title"><div>Đời sống</div></div>
        <div className="title"><div>Giải trí</div></div>
        <div className="title"><PiDotsThreeOutlineFill size={30} /></div>
      </div>
      <div className="d-flex align-items-center">
        <FaSearch className="search-icon" size={30} />
      </div>
    </div>
  </div>
}