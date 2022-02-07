import React, {useState} from "react";

//difference in implementing useState
//make setValue (setNewValue) as separate function
//in Class component in order to use setValue as separate function
//we have to bind it to this as each time we click onClick we lose context
//so we have to bind setValue function to this

//as you can see now hooks are allowing us to use state in Functional component which results
//in writing less codes comparing to Class component


//Class component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        }
    }
    this.setNewValue = this.setNewValue.bind(this);

    setNewValue() {
        this.setState({value: this.state.value + 1});
    }
    render() {
        return (
            <div>
                <h1>Hello,{this.state.value}</h1>
                <button onClick={this.setNewValue}>Click</button>
            </div>
        )
    }
}




//Functional component
const ErrorB = () => {
    const [value,setValue] = useState(1)
    const setNewValue = ()=> setValue(value + 1);

    return (
        <div>
            <h1>Hello,{value}</h1>
            <button onClick={setNewValue}>Click</button>
        </div>
    )
}



export  default ErrorBoundary;