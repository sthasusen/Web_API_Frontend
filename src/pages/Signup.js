import axios from "axios"
import React, { Component } from "react"

class Signup extends React.Component{

	state ={
fname:'',
lanem:'',
address:'',
gender:'',
phone:'',
username:'',
password:'',
type:'Customer'

	}

changeHandler =(e)=>{

this.setState({
	[e.target.name]:e.target.value
})

}


register =()=>{

	axios.post('http://localhost:5000/insert',this.state).then((response)=>{

	if(response.data.status===true){

		window.location.href='/login'
	}
	})


}

    render(){
        return(
            <div>


                
	{/* <!-- login --> */}
	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Register Now</h5>
					<form action="#" method="post">
						<div class="form-group">
							<label>FirstName</label>
							<input type="text" class="form-control" value ={this.state.fname} onChange={this.changeHandler} name="fname" placeholder="" required=""/>
						</div>
						<div class="form-group">
							<label>LastName</label>
							<input type="text" class="form-control"value ={this.state.lname} name="lname" onChange={this.changeHandler} placeholder="" required=""/>
						</div>
						<div class="form-group">
							<label>Username</label>
							<input type="text" class="form-control" value ={this.state.username} name="username"onChange={this.changeHandler} placeholder="" required=""/>
						</div>
						<div class="form-group">
							<label>Phone Number</label>
							<input type="text" class="form-control" value ={this.state.phone}  name="phone" placeholder=""onChange={this.changeHandler} required=""/>
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input type="password" class="form-control" value ={this.state.password} name="password" id="password1" onChange={this.changeHandler}placeholder=""
								required=""/>
						</div>
						
						<button type="button" class="btn submit mb-4" onClick={this.register}>Register</button>
						<p class="text-center">
							<a href="#" class="text-da">By clicking Register, I agree to your terms</a>
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
    export default Signup