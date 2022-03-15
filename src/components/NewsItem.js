import React from "react";
const NewsItem = (props)=> {
    let  {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{height:'max-content'}}>
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0px'}}>
        <span className="badge badge-pill badge-danger ml-2"> {source} </span>
        </div>
          <img className="card-img-top" src={!imageUrl?"https://live-production.wcms.abc-cdn.net.au/3eec017e25be4d31e9c2ad91e64b77e6?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=32&width=862&height=485":imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More &rarr;
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
