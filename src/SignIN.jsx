import "./signin.css"
import Nabar from './camponeses/nabar/Navbar'
import Footer from './camponeses/footer/Footer'
import { useState } from "react"
import axios from "axios"

export default function SignIN() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const handelsubmit = async (e) =>{
        e.preventDefault()
        const user = {
            email:email,
            password:password
        }
        try{
         let res= await axios.post('https://api',{user})

        }catch (err){
            console.log(err)
        }
    }
    
  return (
    <>
    <div className='Base'>
        <Nabar/>
        <div className="singin_page container">
            <form onSubmit={handelsubmit}>
            <div className="form" method='post'>
                <label htmlFor='email'  className="l_email" >Email</label>
                <input type="Email" id="email" className="email" placeholder="EMAIL" value={email} onChange={(e) => setemail(e.target.value)}/>
                <label htmlFor='password' className="l_password">Password</label>
                <input type="text"  placeholder="PASSWORD" id="password" className="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                <button type="submit" className="btn">SING IN</button>
            </div >
            </form>
        </div>
        <Footer/>
    </div>
    </>
  )
}
