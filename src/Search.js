import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";

function Search(){
    let [cakesresults, SetcakesResults] = useState([])
    let searchcakeapi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + "red"
  
    useEffect(()=>{ // we are calling api in mount and updated method in functional component which method is known as
      // useEffect()
      axios({ 
        url: searchcakeapi,
        method : "get",
        
      }).then((response)=>{
        console.log("Reasponse from Searchcake api : ", response.data)
        SetcakesResults(response.data.data)
        
    },
    (error)=>{
        console.log("Error from  searchcake api", error)
  
    })
    })
  
      return(
          <div className="container">
         
          <div className="row">
          
        
        {cakesresults?.length>0  ? cakesresults.map((each,index)=>{
          return(
            <Cake cakedata={each} key={index}></Cake>
          )
  
  
        }) : <div className="alert alert-danger"> Results NOT FOUND for the cakes searched by the user 
            Try Searching for another cake </div>}

       
  
        
  </div>
     
     </div>
      )
  }

  export default Search
  