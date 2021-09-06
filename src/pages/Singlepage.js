import axios from 'axios';
import React, { Component,changeHandler } from 'react';

export default class Singlepage extends Component {


state ={

config:{
headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}
},
fname:"",
lname:"",
phone:"",
username:"",
password:"",
image:null,
type:""

}

z
componentDidMount(){

axios.get("http://localhost:5000/getUser",this.state.config).then((response)=>{

this.setState({


fname :response.data.data.FirstName,
lname :response.data.data.Lastname,
phone :response.data.data.PhoneNumber,
username :response.data.data.Username,
image:response.data.data.Profile




})

})


}
changeHandler =(e)=>{

    this.setState({
        [e.target.name]:e.target.value
    })
    
    }

fileHandler =(e)=>{
    this.setState({

image:e.target.files[0]

    })
    console.log(this.state.image)
}
register =()=>{



    const data = new FormData()
    data.append('fname',this.state.fname)
    data.append('lname',this.state.lname)
    data.append('username',this.state.username)
    data.append('phone',this.state.phone)
    data.append('password',this.state.password)
    data.append('image',this.state.image)





    axios.put('http://localhost:5000/updates',data,this.state.config).then((response)=>{

	if(response.data.status===true){

		window.location.href='/updateDetails'
	}
	})


}

  render() {
    return (
      <div> 
          
          <div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Register Now</h5>
					<form action="#" method="post">
                        <img src={`http://localhost:5000/images/${this.state.image}`} style={{height:"200px",width:"100%"}}/>
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
                        <div class="form-group">
							<label class="mb-2">Profile</label>
							<input type="file" onChange={this.fileHandler}/>
						</div>
						
						<button type="button" class="btn submit mb-4" onClick={this.register} >Update</button>
						<p class="text-center">
							<a href="#" class="text-da">By clicking Register, I agree to your terms</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
          
           </div>
    );
  }
}
