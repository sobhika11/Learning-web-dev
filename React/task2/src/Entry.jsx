export default function Entry({img,title,location,text,maps}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img}
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../public/marker.png"
                />
                <span className="country">{location}</span>
                <a href={maps}  target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    )
}