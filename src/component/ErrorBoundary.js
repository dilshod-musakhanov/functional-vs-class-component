import React, {useState} from "react";

//difference in implementing useState



//Class component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        }
    }
    render() {
        return (
            <div>
                <h1>Hello,{this.state.value}</h1>
                <button onClick={() => this.setState({value: this.state.value + 1})}>Click</button>
            </div>
        )
    }
}




//Functional component
const ErrorB = () => {
    const [value,setValue] = useState(1)
    return (
        <div>
            <h1>Hello,{value}</h1>
            <button onClick={()=> setValue(value + 1)}>Click</button>
        </div>
    )
}



export  default ErrorBoundary;