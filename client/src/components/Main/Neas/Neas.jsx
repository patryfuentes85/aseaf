import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Card from './Cardnea'
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

const override = css`
  display: block;
  margin-top: 100px;
  margin-left: 50%;
  border-color: lime;
`;

const ITEMS_PER_PAGE = 10;
const Neas = () => {

  const [neas, setNeas] = useState("");
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    const totalElements = neas.length;
    const nextPage = currentPage + 1;
    const firstIndexOfNextPage = nextPage * ITEMS_PER_PAGE;
    if (firstIndexOfNextPage === totalElements) return;
    setItems([...neas].splice(firstIndexOfNextPage, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndexOfPrevPage = prevPage * ITEMS_PER_PAGE;
    setItems([...neas].splice(firstIndexOfPrevPage, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/neas/all')
       const data = await res.data.slice(0,100)
       setNeas(data)
       setItems([...data].slice(0, ITEMS_PER_PAGE))  
   }
  fetchData()
  }, [])


  
  if(neas){return (
    <div id="divneas">
    <Link to="/createneas"><AwesomeButton type="secondary" className="aws-btn-neas">Add new neas</AwesomeButton></Link>
    <div className="cardcontainer">
     
    {items.map((data, i) =>
      data.designation ? (
        <Card key={i} data={data} />
       ) : null )}
       </div>
        <div className="paginacion"> 
         <AwesomeButton type="secondary" className="aws-btn"><button onClick={prevPage} className="btn-class"> Prev </button></AwesomeButton>
         <AwesomeButton type="secondary" className="aws-btn"><button onClick={nextPage} className="btn-class"> Next </button></AwesomeButton>
         <h1 className="current"> Page {currentPage}</h1>
          </div> 
  
   
    </div>
    )} else {
      return(
        <>
      <RingLoader color={"red"} loading={true} css={override} size={80} speedMultiplier={1} margin={2}/>
        </>
       
      )
    }
  
 
};

export default Neas;
