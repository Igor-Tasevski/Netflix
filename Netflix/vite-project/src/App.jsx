import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CardSlider from './components/CardSlider'



export const BASE_URL = 'https://image.tmdb.org/t/p/original'

function App() {
  const [data, setData] = useState([]) // ova ke go ucime ponataka


  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDZiYzgwODYyMWRmZjdlNThlYWMyNmZlY2RiNDI3NiIsIm5iZiI6MTczMjY0OTI4Ny4wNTc5OTk4LCJzdWIiOiI2NzQ2MjE0NzBmMDU0NWRhMTliYTAyNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rxPFZrnAGJquPPGSNBYkagV9GxoU_l87qQ7ERbpsFdk'
      }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  }, [])
  console.log(data)

const i = Math.floor(Math.random() *20) //to provide random result every time we refresh the page

  return (

    <div>
      <Header />
      <Banner
        img={data?.results?.[i]?.poster_path}
        title={data?.results?.[i]?.title}
        description={data?.results?.[i]?.overview}



      />
     <CardSlider data={data?.results} title={'TV Action & Adventure'}/>
     <CardSlider data={data?.results} title={'Today Top Picks for you'}/>
     <CardSlider data={data?.results} title={'TV Comedies'} />
     <CardSlider data={data?.results} title={'Your Netflix Watch'} />
    </div>
  )
}

export default App
