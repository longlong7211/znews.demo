export default function CardImgLeft({ imgSrc, title = "" }) {
  return <>
    <div className="d-flex py-3" style={{ borderBottom: '1px solid gray' }}>
      <img src={imgSrc} alt="" style={{ aspectRatio: 120 / 80 }} height={80} />
      <div className="ms-2" style={{ fontSize: 15, fontWeight: 'bold' }}>{title}</div>
    </div>
  </>
}