import React from "react";

const Datetime = new Date();
var year = Datetime.getFullYear();
export default function Fotter(){

    return <footer>
        <p>copyright {year}</p>

    </footer>
}