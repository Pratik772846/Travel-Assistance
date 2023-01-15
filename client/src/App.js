import React from "react";
import Carousel from "./components/Carousel"
import Header from './components/Header';
import './App.css';
import axios from "axios";


function App() {

    const [hoteldata, setHoteldata] = React.useState({});
    // gives info about city based on latitude and longitude
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'c8e4e67486msh7fbe36bb51e1182p1be3c3jsn6839c0847040',
    //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //   }
    // };

    // fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=%2B23.167%2B79.9501', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));


    // gives an array containing details of hotel   1277994 hotelid for reference
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'c8e4e67486msh7fbe36bb51e1182p1be3c3jsn6839c0847040',
    //     'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?checkin_date=2023-07-03&room_number=1&order_by=popularity&latitude=26.9167&units=metric&checkout_date=2023-07-04&filter_by_currency=AED&adults_number=2&locale=en-gb&longitude=75.8167&page_number=0&include_adjacency=true&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .then(response => setHoteldata(response))
    //   .catch(err => console.error(err));

    //   console.log(hoteldata);


const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
  params: {
    checkin_date: '2023-07-03',
    room_number: '1',
    order_by: 'popularity',
    latitude: '26.9167',
    units: 'metric',
    checkout_date: '2023-07-04',
    filter_by_currency: 'AED',
    adults_number: '2',
    locale: 'en-gb',
    longitude: '75.8167',
    page_number: '0',
    include_adjacency: 'true',
    children_number: '2',
    children_ages: '5,0',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1'
  },
  headers: {
    'X-RapidAPI-Key': 'c8e4e67486msh7fbe36bb51e1182p1be3c3jsn6839c0847040',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data);
  setHoteldata(response.data);
}).catch(function (error) {
	console.error(error);
});

console.log(hoteldata);


  return (
    <div>
      <Header />
      <div className=" h-20 items-center flex justify-center bg-gray-300">Explore</div>
      <main className=" bg-gray-300">
        <div className=" mb-10 py-10 px-20 bg-white"> 
          <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
        <div className=" mb-10 py-10 px-20 bg-white"> 
          <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
        <div className=" mb-10 py-10 px-20 bg-white"> 
          <p className="flex justify-center">Heritage Sites</p>
          <Carousel /> 
        </div>
      </main>
    </div>
  );
}

export default App;

