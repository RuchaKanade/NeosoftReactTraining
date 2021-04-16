import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import  axios from "axios"
var cardStyle = {width: "50rem", margin: "30px", border:"1px dotted black"};
var Cake1 = "https://preppykitchen.com/wp-content/uploads/2019/02/red-velvet-cake-social.jpg";


function CakeDetails() {
    var [CakeDetails, SetCakeDetails] = useState({})
    let params = useParams()
    console.log("Params are ..." ,  params)

    useEffect(()=>{
        let CakeDetailsApi = "https://apibyashu.herokuapp.com/api/cake/" + params.cakeid
        axios({
            method : "get",
            url : CakeDetailsApi
           
          
        }).then((response)=>{
            console.log("Reasponse from  CakeDetails api : ", response)
            SetCakeDetails(response.data.data)
            // console.log("CakeDetails....." , CakeDetails)
        },
        (error)=>{
            console.log("Error from  login api", error)
        })

        })


    return (
        <div className="jumbotron jumbotron-fluid" style={cardStyle} >
            <div className="card">
                <img src={CakeDetails.image} className="card-img-top" alt="Test" />
                <div className="card-body">
        <h5 className="card-title">{CakeDetails.name}</h5>
                    <p className="card-text">{CakeDetails.description}</p>
                    <a href="#" className="btn btn-primary">{CakeDetails.price}</a>
                </div>
            </div>
        </div>
    )
}

export default CakeDetails;