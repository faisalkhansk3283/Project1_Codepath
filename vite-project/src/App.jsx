import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
import React from 'react';
import EventCard from './EventCard'; // Import the event card component

function App() {
  return (
    
    <div className="App">
      
      <h1>Food Truck Favorites</h1>
      <table className="event-table">
        <tbody>
          <tr>
            <td>
              <EventCard
                name="Birria-Landia"
                description="Mexican"
                imageUrl="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"
                resourceLink="https://thebirrialandia.com/menu/"
              />
            </td>
          
          
            <td>
              <EventCard
                name="Mysttik Masala"
                description="Indian"
                imageUrl="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
                resourceLink="https://indianfoodny.com/"
              />
            </td>
          
            <td>
              <EventCard
                name="The Halal Guys"
                description="Middle Eastern"
                imageUrl="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024"
                resourceLink="https://thehalalguys.com/menu/"
              />
            </td>
            <td>
              <EventCard
                name="NY Dosas"
                description="Vegetarian"
                imageUrl="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"
                resourceLink="https://nydosas.com/menu/"
              />
            </td>
          </tr>
          <tr>
          <td>
              <EventCard
                name="Jerk Pan"
                description="Jamaican"
                imageUrl="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"
                resourceLink="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
              />
            </td>
            <td>
              <EventCard
                name="Tong"
                description="Bangladeshi"
                imageUrl="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"
                resourceLink="https://www.facebook.com/Bangladeshistreetfoods/"
              />
            </td>
            <td>
              <EventCard
                name="King Souvlaki of Astoria"
                description="Greek"
                imageUrl="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"
                resourceLink="https://kingsouvlakinyc.com/"
              />
            </td>
            <td>
              <EventCard
                name="Ling's Sweet Mini Cakes"
                description="Chinese"
                imageUrl="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"
                resourceLink="https://canalstreet.market/"
              />
            </td>
          </tr>

          <tr>
          <td>
              <EventCard
                name="Patacon Pisao"
                description="Venezuelan"
                imageUrl="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"
                resourceLink="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
              />
            </td>
            <td>
              <EventCard
                name="Mom's Mono"
                description="Tibetan"
                imageUrl="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"
                resourceLink="https://www.facebook.com/Bangladeshistreetfoods/"
              />
            </td>
            <td>
              <EventCard
                name="Uncle Gussy's"
                description="Greek"
                imageUrl="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"
                resourceLink="https://kingsouvlakinyc.com/"
              />
            </td>
            <td>
              <EventCard
                name="Makina Cafe"
                description="Ethiopian"
                imageUrl="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"
                resourceLink="https://canalstreet.market/"
              />
            </td>
          </tr>
          {/* Add more event/shop cards as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default App;

