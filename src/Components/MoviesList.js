import React, { Fragment } from 'react'
import CardItem from './CardItem'
import { Container,Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'

const MoviesList = () => {

const [listData,setListData] = useState([]);

useEffect(()=>{    
const FetchData = async()=>{

const url = 'https://api.themoviedb.org/3/person/popular';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzdlMDM3ZWRmOGU2ZmE3ODUyMzAyZjIzNDVkOTY2OSIsInN1YiI6IjY0YmE3NjlmMDZmOTg0MDEzOGJjYTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-2zY5sZuLTwDPX_U_naZA7JvZveNJI0HMeL85kbL1w'
  }
};

await fetch(url, options)
  .then(res => res.json())
  .then(json =>{ setListData(json.result) ;console.log(listData)}
  )
  .catch(err => console.error('error:' + err));
}
FetchData();
},[])
  return (

    <Fragment>
    <Row className='moviesContainer d-flex' >
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>

    </Row>
    
    </Fragment>
  )
}

export default MoviesList
