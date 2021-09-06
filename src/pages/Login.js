import React, { Component } from "react"
import axios from  'axios'
import {ToastContainer,toast} from 'react-toastify'
class Login extends React.Component{

state ={

username:"",
password:""

}

changeHandler=(e)=>{

this.setState({

	[e.target.name]:e.target.value
})

}

login =(e)=>{
	e.preventDefault()

axios.post("http://localhost:5000/login",this.state).then((response)=>{
	console.log(response)
if(response.data.status===true){
	toast('Welcome '+this.state.username,{position:"top-center"})
	alert('Welcome '+this.state.username)
	

	localStorage.setItem('token',response.data.token)
	localStorage.setItem('username',response.data.data.Username)
	localStorage.setItem('type',response.data.data.UserType)



window.location.href='/'

}
else{
	
	toast.error("Invalid Credentials")
}

})

}
    render(){
        return(
            
            <div>
				<ToastContainer autoClose={5000} />
	
	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Login Now</h5>
					<form action="#" method="post">
						<div class="form-group">
							<label>Username</label>
							<input type="text" class="form-control" value ={this.state.username} onChange={this.changeHandler} name="username" placeholder="" required=""/>
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input type="password" class="form-control" value ={this.state.password} onChange={this.changeHandler} name="password" placeholder="" required=""/>
						</div>
						<button type="button" class="btn submit mb-4" onClick={this.login}>Login</button>
						<p class="forgot-w3ls text-center mb-3">
							<a href="#" class="text-da">Forgot your password?</a>
						</p>
						<p class="account-w3ls text-center text-da">
							Don't have an account?
							<a href="/signup">Create one now</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- //login --> */}
    </div>

            
        )
    }
}
export default Login