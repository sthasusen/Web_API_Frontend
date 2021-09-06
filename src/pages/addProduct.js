import { Component } from "react";
import axios from 'axios'
export default class addProduct extends Component{



state={


    Name:'',
    Description:'',
    Price:'',
    image:''
}
changeHander =(e)=>{

    this.setState({

        [e.target.name]:e.target.value
    })
}
fileHandler =(e)=>{
    this.setState({
        image:e.target.files[0]
    })
}

foodInsert=()=>{

    const data = new FormData()
    data.append('Name',this.state.Name)
    data.append('Description',this.state.Description)
    data.append('Price',this.state.Price)
    data.append('image',this.state.image)
    axios.post('http://localhost:5000/food/insert',data).then((response)=>{
        window.location.href='/'
        console.log(response)
    })
}

render(){
return(
    <div>

<div class="row ">
                <div class="col-lg-7 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                    <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Image</label> <input   type="file" name="image" onChange={this.fileHandler} class="form-control btn btn-danger" placeholder="Add image" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Product Name</label> <input   name="Name" onChange={this.changeHander} class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Product Description *</label> <input  onChange={this.changeHander} name="Description" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Price</label> <input  name="Price" onChange={this.changeHander} class="form-control" placeholder="Please enter the category of product"  /> </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                    <div class="col-md-12"> <button type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.foodInsert} >Add Product</button> </div>
                                </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
    </div>
)

}

}