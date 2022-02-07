import React, {useState, useEffect} from "react";

//in Class component we use componentDidUpdate to do something once element (value) is changed
//but the mess starts once you have many values to follow
//as all values are under one function


//once value in array changes only then useEffect works
//in Functional component useEffect function is used separately for each value

//Class component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            value1: 1,
            value2: 1,
        }
        this.setNewValue = this.setNewValue.bind(this);
    }

    componentDidMount() {
        console.log('useEffect one time')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.value1 !== prevState.value1) {
            console.log('useEffect worked when value1 changed')
        }

        if (this.state.value2 !== prevState.value2) {
            console.log('useEffect worked when value2 changed')
        }

    }

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
    const [value1,setValue1] = useState(1)
    const [value2,setValue2] = useState(1)
    const setNewValue = ()=> setValue(value + 1);

    useEffect(() => {
        console.log('useEffect worked one time')
    }, [value])

    useEffect(() => {
        console.log('useEffect worked when value1 changed')
    }, [value1]);

    useEffect(() => {
        console.log('useEffect worked when value2 changed')
    }, [value2]);

    return (
        <div>
            <h1>Hello,{value}</h1>
            <button onClick={setNewValue}>Click</button>
        </div>
    )
}



export  default ErrorBoundary;