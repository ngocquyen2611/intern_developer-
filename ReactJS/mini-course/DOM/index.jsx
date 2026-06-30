import React from "react";
import ReactDOM from "react-dom/cilent";

function CarList() {
    const cars = ['Ford', 'BMW', 'Audi'];
}

return (
    <>
        <li>{cars.map((car, index) => (<li key={index}>{cars}</li>))}</li>
    </>
)
