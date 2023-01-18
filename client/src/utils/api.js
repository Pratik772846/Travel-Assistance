import axios from 'axios';

export const getPlacesData = async () => {
  try {
    const { data: { data } } = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates`, {
        params: {
            longitude: '-18.5333',
            filter_by_currency: 'AED',
            room_number: '1',
            locale: 'en-gb',
            latitude: '65.9667',
            order_by: 'popularity',
            units: 'metric',
            checkin_date: '2023-07-15',
            adults_number: '2',
            checkout_date: '2023-07-16',
            page_number: '0',
            categories_filter_ids: 'class::2,class::4,free_cancellation::1',
            children_number: '2',
            include_adjacency: 'true',
            children_ages: '5,0'
          },
          headers: {
            'X-RapidAPI-Key': 'bb7cb87919msh9aecc67d025c46dp104129jsnb53d7d4da3b1',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
    });
    console.log(data);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

