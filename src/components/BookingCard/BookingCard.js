import "./BookingCard.css";

const BookingCard = ({imageSrc,title,description,ratingDescription, reviews,rating, location}) => {
    return ( 
        <div className="card">
            <div className="card-img">
                <img src={imageSrc} alt="{title}" />
            </div>
            <div className="card-body">
            <h1>{title}</h1>
            <p>
            {description}
            </p>
            </div>
            <div className="card-reviews">
                <div className="card-rating">
                    
                    <div className="card-rating-left"> 
                        <h5>{ratingDescription}</h5>
                        <p>{reviews} reviews</p>
                    </div>

                    <div className="card-rating-right">
                    {rating}
                    </div>

                </div>
                {location && <h6>Location {location}</h6>}
                <button>Show prices</button>
            </div>
        </div>
    );
}
 
export default BookingCard;