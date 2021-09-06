import axios from "axios";
import React, { Component ,books,book} from "react";
import {ToastContainer,toast} from 'react-toastify'
class Menu extends React.Component{
    

	state={

		data:[],
		config:{
			headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
		}
	}
	
	componentDidMount(){
	console.log(localStorage.getItem('token'))
	axios.get("http://localhost:5000/food/show").then((response)=>{
	
	this.setState({data:response.data.data})
	console.log(response.data.data)
	})
	
	}
	

	books = (pid)=>{
 
		toast(<div style={{margin:"20px;"}} >
		  <p className="text-center"><i className="fa fa-shopping-cart"></i> Are You Sure to Book? </p>
	  
		  <button className="btn btn-dark" onClick={this.books(this,pid)}>Yes</button>
		  <button className="btn btn-danger">No</button>
		  </div>,{position:"top-center"})
	  
	  
	  
	  }

	book=(id)=>{
	
		toast(<a href='/cart'>Added to Cart</a>)
	axios.post("http://localhost:5000/booking/"+id,this.state,this.state.config).then((response)=>{
	console.log(id)
	
	
	}).catch((err)=>{
	console.log(err)
	
	})
	
	}
	
	delete=(id)=>{
	
		axios.delete("http://localhost:5000/d/"+id,this.state.config).then((response)=>{
		console.log(response)
		window.location.href='/'
		}).catch((err)=>{
		console.log(err)
		
		})
		toast.success("Delete Success")
		}
	
		update =(id)=>{
	
	window.location.href='/update/'+id
	
		}
	
	showBooking =()=>{
	
		axios.get('http://localhost:5000/booking/show',this.state.config).then((response)=>{
	
		console.log(response.data.data)
		})
	}
	render(){

	const type =localStorage.getItem('type')
        return(
        <div>
<ToastContainer></ToastContainer>

	<div class="breadcrumb-agile bg-light py-2">
		<ol class="breadcrumb bg-light m-0">
			<li class="breadcrumb-item">
				<a href="/">Home</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">Menu</li>
		</ol>
	</div>
	<section class="portfolio py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<h3 class="w3ls-title mb-3">Our <span>Menu</span></h3>
				<p class="titile-para-text mx-auto">Todays Menu</p>
			</div>
			<div class="row">


{


this.state.data.map((data,i)=>{
return(
	<div className="col-lg-4"  >
	<div class="col-lg-12">
					<div class="gallery-demo" style={{height:"300px"}}>
						<a href={`#gal${i}`}>
							<img src={"http://localhost:5000/images/"+data.Image} alt=" " class="img-fluid" style={{height:"200px"}}  width={"100%"} />
							<h4 class="p-mask">{data.Name} <span>{data.Price}</span></h4>
						</a>
					</div>
				</div>

				<div id={`gal${i}`} class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src={"http://localhost:5000/images/"+data.Image} alt=""/>
			<h4 class="p-mask">{data.Name} <span>{data.Price}</span></h4>
			

{type==="Admin"?(<>
	<button class="button-w3ls active mt-3" onClick={this.update.bind(this,data._id)}>Update
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</button>
			<button class="button-w3ls active mt-3" onClick={this.delete.bind(this,data._id)}>Delete
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</button>
</>):(<>

	<button class="button-w3ls active mt-3" onClick={this.book.bind(this,data._id)}>Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</button>
</>)}

		
			<a class="close" href="#gallery">×</a>
		</div>

        </div>
		</div>		
)
})

}

				
			
			</div>
			
		</div>
	</section>

	
        </div>
        )   
        
        
    }
}

export default Menu