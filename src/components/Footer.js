import  React, {Component} from 'react';

class Footer extends React.Component{

    render(){
        return(
            <div>
                {/* <!-- footer --> */} 
	<footer class="py-5">
		<div class="container py-xl-4">
			<div class="row footer-top">
				<div class="col-lg-4 footer-grid_section_1its footer-text">
					{/* <!-- logo --> */}
					<h2>
						<a class="logo text-wh" href="index.html">
							<img src="assest/images/logo.png" alt="" class="img-fluid"/><span>Tastiest</span> Pizza
						</a>
					</h2>
					{/* <!-- //logo --> */}
					<p class="mt-lg-4 mt-3 mb-lg-5 mb-4">Order food online from hundreds of popular restaurants in Kathmandu, Lalitpur, Bhaktapur and Pokhara through our website, mobile app or over the phone.</p>
					{/* <!-- social icons --> */}
					<ul class="top-right-info">
						<li>
							<p>Follow Us:</p>
						</li>
						<li class="facebook-w3">
							<a href="#facebbok">
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
					{/* <!-- //social icons --> */}
				</div>
				<div class="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
					<div class="footer-title">
						<h3>Contact Us</h3>
					</div>
					<div class="footer-text mt-4">
						<p>Address : Jadibuti, Kathmandu, Nepal</p>
						<p class="my-2">Phone : +12 534894364</p>
						<p>Email : <a href="mailto:info@example.com">info@gmail.com</a></p>
					</div>
					<div class="footer-title mt-4 pt-md-2">
						<h3>Payment Method</h3>
					</div>
					<ul class="list-unstyled payment-links mt-4">
						<li>
							<a href="login.html"><img src="assest/images/pay2.png" alt=""/></a>
						</li>
						<li>
							<a href="login.html"><img src="assest/images/pay5.png" alt=""/></a>
						</li>
						<li>
							<a href="login.html"><img src="assest/images/pay1.png" alt=""/></a>
						</li>
						<li>
							<a href="login.html"><img src="assest/images/pay4.png" alt=""/></a>
						</li>
					</ul>
				</div>
				<div class="col-lg-4 footer-grid_section_1its">
					<div class="footer-title">
						<h3>Request Info</h3>
					</div>
					<div class="info-form-right mt-4 p-0">
						<form action="#" method="post">
							<div class="row">
								<div class="col-lg-6 form-group mb-2 pr-lg-1">
									<input type="text" class="form-control" name="Name" placeholder="Name" required=""/>
								</div>
								<div class="col-lg-6 form-group mb-2 pl-lg-1">
									<input type="text" class="form-control" name="Phone" placeholder="Phone"
										required=""/>
								</div>
							</div>
							<div class="form-group mb-2">
								<input type="email" class="form-control" name="Email" placeholder="Email" required=""/>
							</div>
							<div class="form-group mb-2">
								<textarea name="Comment" class="form-control" placeholder="Comment"
									required=""></textarea>
							</div>
							<button type="submit" class="btn submit-contact ml-auto">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- //footer -->
	<!-- copyright --> */}
	<div class="cpy-right text-center py-3">
		<p>© 2019 Tasty Burger. All rights reserved | Design by
			<a href="http://w3layouts.com"> W3layouts.</a>
		</p>
	</div>
	{/* <!-- //copyright -->
	<!-- move top icon --> */}
	<a href="#home" class="move-top text-center">
		<span class="fa fa-level-up" aria-hidden="true"></span>
	</a>
	{/* <!-- //move top icon --> */}


            </div>
        )
    }

}
export default Footer