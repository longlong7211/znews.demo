export default function HagtagComponent({ content }) {
  return <>
    <div className="hagtag-root ms-2">
      <div className="content"># {content}</div>
    </div>
  </>
}