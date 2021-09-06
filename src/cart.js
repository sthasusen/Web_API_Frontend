import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer ,toast} from 'react-toastify'

export default class cart extends Component {

state={
    data:[],
    total:0,
    Qty:1,
    config:{
        headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
    }
}

    componentDidMount(){
	
		axios.get('http://localhost:5000/booking/show',this.state.config).then((response)=>{
	this.setState({data:response.data.data,total:response.data.total})
    console.log(response.data.total)
	
		})
	}
    delete =(pid)=>{

axios.delete('http://localhost:5000/delete/'+pid).then((response)=>{
    console.log(response.data.data)
    window.location.href='/cart'
})
    }

    

plus=(value)=>{

  console.log(value)
    let qty = document.querySelector(`.qty${value._id}`);
    let quan = parseInt(qty.innerHTML);
  
    quan = quan+1;
    console.log(quan)
 
    
  
    axios.put('http://localhost:5000/updatebooking/'+value._id,{Qty:quan},this.state.config).then((response)=>{
      toast.success("Quantity Added")
    console.log(response)
    
     window.location.reload();
    })
  
  
  
  
  }
  
  
  minus =(value)=>{
  
    console.log(value)
    let qty = document.querySelector(`.qty${value._id}`);
    let quan = parseInt(qty.innerHTML);
  
    quan = quan-1;
    console.log(qty)
  
    
  
    axios.put('http://localhost:5000/updatebooking/'+value._id,{Qty:quan},this.state.config).then((response)=>{
      toast.success("Quantity Decreased")
    console.log(response)
     window.location.reload();
    })
  
  
  
  
  }
  
  render() {
    return (
      <>
      <ToastContainer/>
        <>
  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
  <div className="container-full bootstrap snippets bootdey text-center">
    <div className="col-lg-12 col-lg-8 content">
      <div className="row-full">
        <div className="col-lg-12">
          <ol className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li className="active">Cart</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-info panel-shadow">
            <div className="panel-heading">
              <h3>
                <img className="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg" />
                Sushen Shrestha
              </h3>
            </div>
            <div className="panel-body"> 
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                   {

this.state.data.map((data)=>{
    return(
        <tr>
    <td><img src={"http://localhost:5000/images/"+data.ProductId.Image} className="img-cart" /></td>
    <td><strong>{data.ProductId.Name}</strong></td>
    <td>
      <form className="form-inline">
      <button className="btn btn-default" onClick={this.plus.bind(this,data)}>+</button>
        <p class={`qty${data._id}`} >{data.Qty}</p>
        <button className="btn btn-default" onClick={this.minus.bind(this,data)}>-</button>
        <button href="#" className="btn btn-primary" rel="tooltip"onClick={this.delete.bind(this,data._id)} ><i className="fa fa-trash-o" /></button>
      </form>
    </td>
    <td>${data.ProductId.Price}</td>
    <td>${parseInt(data.ProductId.Price)*parseInt(data.Qty)}</td>
  </tr>
    )
  
})

                   }
                   
                    <tr>
                      <td colSpan={6}>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-right">Total Product</td>
                      <td>${this.state.total}</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-right">Total Shipping</td>
                      <td>$2.00</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-right"><strong>Total</strong></td>
                      <td>${this.state.total+2}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="btn btn-success "><span className="glyphicon glyphicon-arrow-left" />&nbsp;Continue Shopping</a>
          <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right" /></a>
       
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</>

      </>
    )
  }
}
