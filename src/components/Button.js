import React from 'react';

const Button = ({vieillir, annee}) => (
        <button className="btn btn-primary" onClick={vieillir}>
        vieillir de {annee} an(s)
        </button>
    )

export default Button;