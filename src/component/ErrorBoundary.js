import React from "react";

//Class component always has to render something
//Functional component always has to return something


//Class component
class ErrorBoundary extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}




//Functional component
const ErrorB = () => {

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}



export  default ErrorBoundary;