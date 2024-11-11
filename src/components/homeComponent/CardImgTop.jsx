export default function CardImgTop({ isBig = true, imgSrc, title = "", desc = "" }) {
  return <>
    <div>
      <div>
        <img src={imgSrc} alt="" width={"100%"} style={{ aspectRatio: 500 / 330 }} />
      </div>
      <div style={{ fontWeight: 'bold', fontSize: 32 }}>
        {title}
      </div>
      {isBig && <div>
        {desc}
      </div>}
    </div>
  </>
}