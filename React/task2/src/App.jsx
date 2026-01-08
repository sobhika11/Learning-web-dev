import React from 'react'
import Header from './Header.jsx'
import Entry from './Entry.jsx'
const App = () => {
  return (
    <>
      <Header />
      <Entry img="../public/Fuji.jpeg" title="Mount Fuji" location="Japan" text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." maps="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170422,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" />
      <Entry img="../public/Sydney.webp" title="Sydney Opera House" location="Australia" text="The Sydney Opera House is a world-renowned performing arts center located on the foreshore of Sydney Harbour, celebrated for its distinctive architecture and cultural significance." maps="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2127164,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" />
      <Entry img="../public/norway.webp" title="Geirangerfjord " location="Norway" text="The fjord is one of Norway's most visited tourist sites. In 2005, it was listed as a UNESCO World Heritage Site, jointly with the Nærøyfjorden as the West Norwegian Fjords site. This status was challenged by the disputed plans to build power lines across the fjord." maps="https://www.google.com/maps/place/Fjord,+Norway/@62.2698782,6.0813476,9z/data=!3m1!4b1!4m6!3m5!1s0x46141f4f17d4c10b:0x2bc40d63a7131d9e!8m2!3d62.3009101!4d7.3947382!16s%2Fg%2F11hz1tgxtd?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" />
      <Entry img="../public/Paris.jpg" title="Paris" location="France" text="Paris, the capital city of France, is often referred to as the City of Light due to its historical significance as a center of education and enlightenment. Nestled along the Seine River, Paris is renowned for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral, each reflecting the city's rich history and architectural beauty." maps="https://www.google.com/maps/place/Paris,+France/@48.8589384,2.2644614,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" />    
    </>
  )
}

export default App