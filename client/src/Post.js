export default function Post({title,summary,cover,content}) {
    return (
        <div className="post">
        <image>
        <img src="https://cdn.pixabay.com/photo/2018/09/12/22/43/bangladesh-3673378_1280.jpg" alt="" />
        </image>
        
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Raiyan Noory</a>
            <time>17-02-2024 7:08</time>
          </p>
          <p className="sumamry">{summary} </p>
        </div>

      </div>
    );
}