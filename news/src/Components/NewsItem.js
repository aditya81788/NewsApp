import news_image from '../Assets/news_image.png';
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light d-inline-block mx-3 my-3 px-2 py-2" style={{width: '345px' }}>
    <img src={src?src:news_image} style={{height:"200px", width: "320px"}}className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description? description.slice(0,90):"The main news article itself is written from bottom down."}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem
