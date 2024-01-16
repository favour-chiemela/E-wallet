import React, { useState } from "react";
import { Icon } from '@iconify/react';
import Content from "../content/Content.css";

const ContentClass = () => {
	return (
		<div className="BigCon">
			<div className="outContainer">
			   <div className="etext">
				  <h1>
					Above and <span>Beyond Finance</span>
				  </h1>
				  <svg
					className="curved-line"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 500 50"
					preserveAspectRatio="none"
				   >
					<path d="M0 0 C 50 30, 450 30, 500 0" />
				  </svg>
                  <div className="EpayText">
				  <p>
					EPay gives you the freedom to get more. Our solutions make
					payments easier, transfers free, savings more rewarding and
					gives you cashback on airtime and data top-ups. With 100%
					network uptime, you can make payments in seconds without
					transaction failure. Enjoy a better life with EPay.
				  </p>
			     </div>
				</div>
			   <div className="bodycard">
          			<div className="phone">
					   <div className="outphone">
						</div>
						  <div className="inphone">
						     <div className="inerphone">
							   <div className="total">
							     <h6>Total balance</h6>
							       <h5>*****</h5>
							   </div>
							   <div className="transaction">
							     <h6>Transaction History</h6>
							   </div>
						      </div>
						   <div className="arrow">
							 <div className="transfer">
						      <Icon icon="gg:arrow-down-r" color="white" width="24" id="tran"/>
							  <h6>Deposit</h6>
   						    </div>
						    <div className="transfer2">
						     <Icon icon="gg:arrow-left-r" color="white" width= "24"/>
							  <h6>Transfer</h6>
						   </div>
						   <div className="withdraw">
						     <Icon icon="fluent-emoji-high-contrast:up-arrow" color="white" width="24" />
							  <h6>Withdraw</h6>
						   </div>
						  </div>
						</div>
					</div>
				    <div className="circle">
				    </div>
					<div className="atm"></div>
			   </div>
			</div>
		</div>
	);
};

export default ContentClass;
