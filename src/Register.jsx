import React, { useState } from 'react'
import "./register.css"
import Navbar from './camponeses/nabar/Navbar'
import Footer from './camponeses/footer/Footer'
import axios from "axios"

export default function Register() {
  const [form,setform] = useState({
    name:"",
    Last_Name:"",
    email:"",
    conf_email:"",
    password:"",
    conf_password:""
  })
  function handelform(e){
    setform({...form,[e.target.name]:e.target.value})
  }
  const handelsubmit = async (e)=>{
    e.preventDefault()
    const new_user = {
      Name:form.name,
      Last_Name : form.Last_Name,
      Email:form.email,
      Password:form.password
  }
  try {
   let  res = await axios.post('https://api',{new_user})
    console.log(`response from Reigster  ${res}`)
  } catch (error) {
    console.log(`error from Reigster  ${error}`)
  }
  }
  console.log(form.Last_Name)

  return (
    <>
    <div className='Base'>
      <Navbar showsing={false} />
      <div className='container register'>
              <form action="" onSubmit={handelsubmit}>
                <div>
                  <label  htmlFor='name'>Name</label>
                  <input type="text" id='name' placeholder='NAME' value={form.name} onChange={handelform} name="name"/>
                  <label htmlFor="Last_name" >Last Name</label>
                  <input type="text"  id='Last_name' name='Last_Name' placeholder='LAST NAME' value={form.Last_Name} onChange={handelform}/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id='email' placeholder='email' name='email' value={form.email} onChange={handelform}/>
                  <label htmlFor="conf_email">confirem email</label>
                  <input type="text" id ='conf_email' name='conf_email' placeholder='Confirem email' value={form.conf_email} onChange={handelform}/>
                </div>
                <div>
                  <label htmlFor="Password">Password</label>
                  <input type="password" placeholder='Password' name='password' value={form.password} onChange={handelform}/>
                  <label htmlFor="conf_password">confirem Password</label>
                  <input type="password" id='conf_password' placeholder='confirem Password' name='conf_password' value={form.conf_password} onChange={handelform}/>
                </div>
                <input type="submit" value="submit" id='submit' className='btn'/>
              </form>
      </div>
      <Footer/>
    </div>
    </>
  )
}
