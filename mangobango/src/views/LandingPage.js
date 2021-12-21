import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css';
import { Button } from "reactstrap"


function LandingPage() {

  const navigate = useNavigate();

  const routeChange = () =>{  
    navigate('/signup');
  }

  return (
    <div>
      <h3>
        Save Recipes and Plan your Meals
      </h3>
      <h1>
        Get Cooking!
      </h1>
      <button className="yellowBtn" onClick={routeChange}> Start your Cooking Journey </button>
    </div>
  );
}

export default LandingPage;
