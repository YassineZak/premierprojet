import React, { Fragment } from "react";

const Membre = ({ nom, age, children }) => {
return (
    <Fragment>
  <li 
  className={ age < 50 ? "list-group-item" : "bg-danger list-group-item"} 
  >
    Nom: { nom } <br/>
    Age: { age }
  <span>{ children }</span>
  </li>  
  </Fragment>
)
};
export default Membre;