import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{




logout =()=>{
	localStorage.clear()
	window.location.href="/login"
}


    render(){

		const token = localStorage.getItem('token')
		const username = localStorage.getItem('username')
		const type = localStorage.getItem('type')
        return(
            <div>
           <header id="home">
	  
		<div class="top-bar py-2 border-bottom">
			<div class="container">
				<div class="row middle-flex">
					<div class="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
						<div class="row">
							<div class="col-xl-3 col-6 header-top_w3layouts">
								<p class="text-da">
									<span class="fa fa-map-marker mr-2"></span>Jadibuti, Kathmandu
								</p>
							</div>
							<div class="col-xl-3 col-6 header-top_w3layouts">
								<p class="text-da">
									<span class="fa fa-phone mr-2"></span>+977 9824897653
								</p>
							</div>
							<div class="col-xl-6"></div>
						</div>
					</div>
					<div class="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
						<div class="row middle-flex">
						{!token?(<>
							<div class="col-lg-5 col-4 top-w3layouts p-md-0 text-right">

							
<a href="/login" class="btn login-button-2 text-uppercase text-wh">
	<span class="fa fa-sign-in mr-2"></span>Login</a>
</div>
						</>):(<>
							<div class="col-lg-5 col-4 top-w3layouts p-md-0 text-right">

							
<a href="/login" class="btn login-button-2 text-uppercase text-wh" onClick={this.logout} >
	<span class="fa fa-sign-in mr-2"></span>Logout</a>
</div>
						</>)}
							
							<div class="col-lg-7 col-8 social-grid-w3">
								{/* <!-- social icons --> */}
								<ul class="top-right-info">
									<li>
										<p>Follow Us:</p>
									</li>
									<li class="facebook-w3">
										<a href="#facebook">
											<span class="fa fa-facebook-f"></span>
										</a>
									</li>
									<li class="twitter-w3">
										<a href="#twitter">
											<span class="fa fa-twitter"></span>
										</a>
									</li>
									<li class="google-w3">
										<a href="#google">
											<span class="fa fa-google-plus"></span>
										</a>
									</li>
									<li class="dribble-w3">
										<a href="#dribble">
											<span class="fa fa-dribbble"></span>
										</a>
									</li>
								</ul>
{/* 								<!-- //social icons -->
 */}							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	{/* <!-- header 2 --> */}
	{/* <!-- navigation --> */}
	<div class="main-top py-1">
		<div class="container">
			<div class="nav-content">
				{/* <!-- logo --> */}
				<h1>
					<Link to="/" class="logo">
					
						<img src="assest/images/logo.jpg" alt="" class="img-fluid"/><span>Tastiest</span> Pizza
					</Link>
				</h1>
				{/* <!-- //logo --> */}
				{/* <!-- nav --> */}
				<div class="nav_web-dealingsls">
					<nav>
						<label for="drop" class="toggle">Menu</label>
						<input type="checkbox" id="drop" />
						<ul class="menu">

{!token?(


<>

<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About US</Link></li>
</>):

(<>

<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About US</Link></li>
							
							<li><Link to="/menu">Menu</Link></li>
							<li><Link to="/contact">Contact</Link></li>
							<li>
							
								<label for="drop-3" class="toggle toogle-2">{username}<span class="fa fa-angle-down"
										aria-hidden="true"></span>
								</label>
								<a href="#pages">{username}<span class="fa fa-angle-down" aria-hidden="true"></span></a>
								<input type="checkbox" id="drop-3" />
								<ul>
									<li><Link to="/updateDetails">Edit Details</Link></li>

{type==="Admin"?

(<>
<li><Link to="/admin">Admin Panel</Link></li>
</>):
(<>


</>)

}


								
									
								</ul>
							</li>
							<li>
							
								<Link to="/cart"class="dwn-button ml-lg-5">
									<span class="fa fa-shopping-cart  mt-lg-0 mt-4" aria-hidden="true"></span>
								</Link>
								
							</li>

</>)}

							
						</ul>
					</nav>
				</div>
			
			</div>
		</div>
	</div>
	

            </div>
        )
    }
}
export default Header