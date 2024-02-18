import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
export default function Post({title,summary,cover,content,createdAt,author}) {
    return (
        <div className="post">
        <image>
        <img src="https://cdn.pixabay.com/photo/2018/09/12/22/43/bangladesh-3673378_1280.jpg" alt="" />
        </image>
        
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Raiyan Noory</a>
            <time> {formatISO9075(new Date(createdAt))} </time>
          </p>
          <p className="sumamry">{summary} </p>
        </div>

      </div>
    );
}