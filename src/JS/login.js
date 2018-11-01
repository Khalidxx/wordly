import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 
import '../CSS/main.css';


export default class LogIn extends Component {

    doNothing(){
        console.log("did nothing");
    }
    render(){
        return(
            <div id="main">
		{/* <!-- Page 1: Main page(Log in/sign up) --> */}
		<div id="1">
			<div className="container">
				<div className="main-logo"><img src="./src/images/Wordably-logo2.png" alt="logo"/></div>

				<div className="secondary-container">

					<input id="tab1" type="radio" name="tabs" checked="checked" />
					<label htmlFor="tab1" id="tab1">SIGN IN</label>

					<input id="tab2" type="radio" name="tabs" />
					<label htmlFor="tab2" id="tab2">SIGN UP</label>


					{/* <!--sign in content --> */}
					<section id="content1">
							<div className="form-container">
								<form action="/action_page.php">
									<div className="row">
										<label htmlFor="username"></label>
										<input type="text" id="username" name="username" placeholder="Username" />
									</div>

									<div className="row">
										<label htmlFor="password"></label>
										<input type="text" id="newPassword" name="newPassword" placeholder="Password" />
									</div>
                                    <Link to="/SelectMode">
									<div className="row">
										<input type="submit" value="Log in" onClick={this.doNothing}/>
										{/* <span className="error">Wrong username or password was entered</span> */}
									</div>
                                    </Link>

								</form>
							</div>
					</section> 
                    {/* <!-- end of sign in content --> */}

					{/* <!-- sign up content --> */}
					<section id="content2">
							<div className="form-container">
								<form action="/action_page.php">
									<div className="row">
										<label htmlFor="email"></label>
										<input type="text" id="email" name="email" placeholder="Email" />
									</div>

									<div className="row">
										<label htmlFor="username"></label>
										<input type="text" id="usernameregister" name="usernameregister" placeholder="Username" />
									</div>

									<div className="row">
										<label htmlFor="password"></label>
										<input type="text" id="passwordregister" name="passwordregister" placeholder="Password" />
									</div>

									<div className="row">
										<input type="submit" value="Register" onClick={this.doNothing} />
										<span className="error">Please check fields in red</span>
									</div>
									

								</form>
							</div> 
					</section> 
                    {/* <!-- end of sign up content --> */}

				</div> 
                {/* <!-- end of secondary container --> */}
			</div> 
            {/* <!-- end of container --> */}
		</div> 
        {/* <!-- end of page 1 --> */}

    {/* <!-- end of main --> */}
	</div> 
        );
    }
}
