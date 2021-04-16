import {useState, useEffect} from "react"
import axios from "axios"
import { event, post } from "jquery"
import {Link} from "react-router-dom";
//component did mount
//componentdidipdate 
//useEffect will work as both

function Login(props) {

    console.log(">>>> props of login" , props)
    useEffect(()=>{
        // alert("Mounted and updated")
    },[])
    //By passing black array it eill work as only mounted not for updated
    
   
    var [user, setUser] =useState({}) //we are passing the blanck obj({})
 var [error, SetError] = useState()

//  Here error is the property and Seteeor is the method 
//  method update the value of the property

     let GetEmail = (event)=>{
         setUser({
             email: event.target.value,
             password: user.password
         })
        user.email = event.target.value
        console.log("......", event.target.value)

    }
    let GetPassword = (event)=>{
        setUser({
            // ...user,
            password: event.target.value, //updating the password value on screen 
            email: user.email //abother way to copy other property from obj 
            
        })
       user.password = event.target.value //event.target.value will give the passord enter by the user in imput section

    }

    let Login = function () {
        let loginapi = "https://apibyashu.herokuapp.com/api/login"
        console.log("user is trying to login",  user)
        axios({
            url : loginapi,
            method : "post",
            data : user
        }).then((response)=>{
            console.log("Reasponse from  Login api : ", response)
            // if(response.data.token){
            //     localStorage.data.token = 
            // }
            
        },
        (error)=>{
            console.log("Error from  login api", error)
        })

        }
        
    return(
      
            <div style={{width:"50%", margin:"auto"}}>
                <label>LOGIN</label>
                <div className ="form-group">
                    <label>Email :</label>
                <input type="email" className="form-control" onChange={GetEmail}></input>
                {user && <label>{user.email}</label>}
                </div>
                <div className ="form-group">
                    <label>Password : </label>
                <input type="password" className="form-control" onChange={GetPassword}></input>
                {user && <label>{user.password}</label>} 
            {/* Conditional rendering => if user is there than oly user.email will execute */}
                </div>
                <div style = {{color:"red"}}>
                    {error} 
                </div>
                <div>
                 <Link to = "/signup"> New User?Click ME!!</Link> 
               
                <div style={{float:"right"}}>
                 <Link to = "/forgot">Forgot Password??</Link> 
                 </div>
                </div>
            <button className="btn btn-primary" onClick={Login}>Login</button>
                </div>
    )
    
}

export default Login