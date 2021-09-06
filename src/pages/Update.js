import axios from "axios";
import { Component } from "react";
import '../css/bootstrap.css';
import '../css/css_slider.css';
import '../css/single.css';
import '../css/style.css';









export default class Update extends Component{
    state={

id:this.props.match.params.id,
        Name:'',
        Description:'',
        Price:'',
        image:''
    }
    foodInsert=()=>{

        const data = new FormData()
        data.append('Name',this.state.Name)
        data.append('Description',this.state.Description)
        data.append('Price',this.state.Price)
        data.append('image',this.state.image)
        axios.put('http://localhost:5000/food/update/'+this.state.id,data).then((response)=>{
            window.location.href='/'
            console.log(response)
        })
    }
    componentDidMount(){

        axios.get('http://localhost:5000/food/single/'+this.state.id).then((response)=>{
            this.setState({

                Name:response.data.data.Name,
                Description:response.data.data.Description,
                Price:response.data.data.Price,
                image:response.data.data.Image
            })
        })
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
                                                            <img src={"http://localhost:5000/images/"+this.state.image} style={{height:"200px",width:"100%"}}/>
                                                        </div>
                                                        
                                                    </div>
                                                <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group"> <label for="form_email">Image</label> <input   type="file" name="image" onChange={this.fileHandler} class="form-control btn btn-danger" placeholder="Add image" required="required" data-error="Description is required." /> </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group"> <label for="form_name">Product Name</label> <input   name="Name" value={this.state.Name} onChange={this.changeHander} class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group"> <label for="form_email">Product Description *</label> <input value={this.state.Description}  onChange={this.changeHander} name="Description" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group"> <label for="form_email">Price</label> <input  name="Price" value={this.state.Price} onChange={this.changeHander} class="form-control" placeholder="Please enter the category of product"  /> </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row">
                                                <div class="col-md-12"> <button type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.foodInsert} >Update</button> </div>
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