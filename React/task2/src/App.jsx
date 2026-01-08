import React from 'react'
import Header from './Header.jsx'
import Entry from './Entry.jsx'
const App = () => {
  return (
    <>
      <Header />
      <Entry img="../public/Fuji.jpeg" title="Mount Fuji" location="Japan" text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." />
      <Entry img="../public/Sydney.webp" title="Sydney Opera House" location="Australia" text="The Sydney Opera House is a world-renowned performing arts center located on the foreshore of Sydney Harbour, celebrated for its distinctive architecture and cultural significance." />
      <Entry img="../public/Sydney.webp" title="Sydney Opera House" location="Australia" text="The Sydney Opera House is a world-renowned performing arts center located on the foreshore of Sydney Harbour, celebrated for its distinctive architecture and cultural significance." />
      <Entry img="../public/Sydney.webp" title="Sydney Opera House" location="Australia" text="The Sydney Opera House is a world-renowned performing arts center located on the foreshore of Sydney Harbour, celebrated for its distinctive architecture and cultural significance." />    
    </>
  )
}

export default App