import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Experience</span>
							<h2 className="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
				         <div className="timeline-centered">
						   <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-1">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="https://mewt.in/">MEWT Bengaluru | Backend Engineering Intern</a> <span>Jan 2021 - Present</span></h2>
					                  <p>It's a startup at Bengaluru which provides loan facilities to MSMEs to ensure they don't gey stucked in deadlock of their payment lifecycle and grow more in the future.
									 I am Currently working here as Backend Engineering Intern and Automated the process to fetch Account details using Django
										framework,which helped to reduce truckloads of redundant
										work.
										</p>
					               </div>
					            </div>
					        </article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-2">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="https://github.com/Shubham-bhawsar/FarmZop">FarmZop | B.tech Project</a> <span>Aug 2020 - Nov 2020</span></h2>
					                  <p>•Developed a web-app on Flask framework to help the farmers
											in predicting Early-Yield and Disease Detection.</p>
											<p>• Built the Machine Learning Based Model for Crop Yield Pre-
											diction and Deep Learning based model for Disease Detection.</p>
											<p>• Deployed the entire model through flask.</p>
					               </div>
					            </div>
					         </article>
						   

					         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-4">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="#colorlib-hero">Portfolio on React</a> <span>Nov 2020</span></h2>
					                  <p>This portfolio is built on react and with backend services on Node.</p>
					               </div>
					            </div>
					         </article>


					         <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-5">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a href="https://github.com/Shubham-bhawsar/AL-Task">AL-Task</a> <span>June 2019 -July 2019</span></h2>
					                  <p>• Built a system which helps the analysts to fetch the data di-
										rectly from database into google sheets to perform Data Anal-
										ysis and further evaluation on data.</p><p> • Theory Of Computation
										• Built API to connect Google Sheets and Database and sync
										the data whenever required.</p>
					               </div>
					            </div>
					         </article>

					         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-1">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a href="https://play.google.com/store/apps/details?id=com.infotsav.test&hl=en">Infotsav App</a> <span>Dec 2018 - Jan 2019</span></h2>
					                  <p>This app was build for Central India biggest technical fest Infotsav 2k19 hosted by ABV-IIITM Gwalior</p>
					               </div>
					            </div>
					         </article>
							 <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-2">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a >Hotel Management System</a> <span>Jan 2019</span></h2>
									   <p>• Developed a web-app for Hostel/Hotel Management System
										which gives all the functionality from Room Booking,Food
										Ordering and Room Availability status.</p>
										<p>• Implemented other backend features such as validation and
										login authentication,Scheduled tasks.</p>
					               </div>
					            </div>
					         </article>

					        

			

					         <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>

            </div>
        );
    }
}

export default Experience;