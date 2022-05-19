import React , {useEffect, useState} from "react";
import logospace from '../../../assets/spacestation.png'
import axios from 'axios';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";


const override = css`
  display: block;
  margin-top: 100px;
  margin-left: 50%;
  border-color: lime;
`;

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [apod, setApod] = useState(""); // Para guardar los posts

  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        const data = res.data
        setApod(data)
    }
   fetchData()
   }, [])

  


  if(apod.media_type==="image") {return <>
  <div className='inicio'>
    <img className='logoinicial' src={logospace} alt="logopokemon" style={{width : 160}}/>
    <h1 className='welcome'> WELCOME TO THE NASA APP MERN</h1>
    </div> 
      
      <div className="picture">
        <h1>Author of the APOD: {apod.copyright}</h1>
         <h1>Date: {apod.date}</h1> 
         <img src={apod.url} alt="apod" />
         <h1 className="home">{apod.explanation}</h1>
      </div>
  </>

        } else if(apod.media_type==="video") {return <>
          <div className='inicio'>
        <img className='logoinicial' src={logospace} alt="logopokemon" style={{width : 160}}/>
        <h1 className='welcome'> WELCOME TO THE NASA APP MERN</h1>
        </div> 
          
          <div className="picture">
            <h1>Author of the APOD: {apod.copyright}</h1>
            <h1>Date: {apod.date}</h1> 
            <iframe src={apod.url} frameborder="0" title="apod video"></iframe> : <img alt="astronomy" src={apod.url}></img>
            <h1 className="home">{apod.explanation}</h1>
          </div>
        </> 

 } else {
  return(
    <>
  <RingLoader color={"lime"} loading={true} css={override} size={80} speedMultiplier={1} margin={2}/>
    </>
   
  )
}
};

export default Home;
