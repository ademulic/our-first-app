import BookingCard from "./components/BookingCard/BookingCard";

 
function App() {

  const hotelLocations = [
    {
      id:1,
      imageSrc: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/412834299.jpg?k=fdc51eea945eabdf943e54e2d02db144936eb1f16d43b29a793f05c5afba87b5&o=&hp=1",
      title: "Hotel Vrbak ND",
      description:'Hotel Vrbak ND features a shared lounge, terrace, a restaurant and bar in Novi Pazar. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk.',
      ratingDescription: "Wonderful",
      reviews: 631,
      rating: 9.1,
      location:9.7
    },
    {
      id:2,
      imageSrc: "https://cf2.bstatic.com/xdata/images/hotel/square600/211221347.webp?k=200a8bb43c1bc1f5584281e54075455b39e5821a2c94d9d3c987613550ec7703&o=",
      title: "Apartmani 23",
      description:'Apartmani 23 provides free Wifi and rooms with air conditioning in Novi Pazar. Featuring a private entrance, the apartment allows guests their privacy.',
      ratingDescription: "Exceptional",
      reviews: 323,
      rating: 9.6
    },
    {
      id:3,
      imageSrc: "https://cf2.bstatic.com/xdata/images/hotel/square600/602684708.webp?k=1036499fadaeb85566bb8917061fb10c0a06f6c61acfebbaa4f24bd92cef064e&o=",
      title: "Star Apartments",
      description:'This property offers access to a terrace and free private parking. With free Wifi, this 1-bedroom apartment provides a flat-screen TV, a washing machine, and a fully equipped kitchen with an oven and...',
      ratingDescription: "Exceptional",
      reviews: 6,
      rating: 10,
      location:10
    },
    {
      id:4,
      imageSrc: "https://cf2.bstatic.com/xdata/images/hotel/square600/376774482.webp?k=649199f85b7fe17c87d1bf6efeb4423da73006ea5643da36583332f1db4a4d16&o=",
      title: "Glass Apartments",
      description:'Glass Apartmani offers air-conditioned rooms in Novi Pazar. The apartment, set in a building dating back to 2021, provides free private parking.',
      ratingDescription: "Exceptional",
      reviews: 120,
      rating: 9.7,
      location:9.3
    }
  ]



  return (
    <div className="App">
      {
        hotelLocations.map(hotelLocation =>(
          <BookingCard 
            key={hotelLocation.id}
            imageSrc={hotelLocation.imageSrc}
            title={hotelLocation.title}
            description={hotelLocation.description}
            ratingDescription={hotelLocation.ratingDescription}
            reviews={hotelLocation.reviews}
            rating={hotelLocation.rating}
            location={hotelLocation.location}
          />
        ))
      }
      
    </div>
  );
}

export default App;
