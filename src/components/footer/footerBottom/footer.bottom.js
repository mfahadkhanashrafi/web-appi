import React from 'react';

const footerBottom = (props)=>{
    return(
        <div className="footer-bottom">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="">
						<ul>

							<li><a href=""><i className="fas fa-shopping-cart"></i> SELL On Shrowsing</a></li>
							<li><a href=""><i className="fas fa-bullhorn"></i> Advertise</a></li>
							<li><a href=""><i className="fas fa-gift"></i>	Gift Card</a></li>
							<li><a href=""><i className="fas fa-question"></i> Help Center</a></li>
							
							<li>
								
								<a href="http://ntier.co/" target="_blank">ALL RIGHTS RESERVED, SHROWSING, 2007-2019
									<img src={require('../../../assets/footer-niter.png')} />
								</a>
							</li>
						</ul>
					</div>				
				</div>
			</div>
		</div>
	</div>
    )
}

export default footerBottom;