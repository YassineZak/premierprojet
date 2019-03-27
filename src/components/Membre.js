import React, { Fragment } from "react";

const Membre = ({ nom, children }) => {
return (
    <Fragment>
  <p>
    Nom: { nom }
  </p>
  <div>{ children }</div>  
  </Fragment>
)
};
export default Membre;