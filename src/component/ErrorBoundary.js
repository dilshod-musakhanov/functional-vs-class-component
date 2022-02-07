import React, {useState, useEffect} from "react";

//in Class component we use componentDidMount() instead of useEffect()
//componentDidMount() will work when page is rendered the first time

//in useEffect the logic is a bit different
//if in array something changed only then useEffect works


//Class component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        }
        this.setNewValue = this.setNewValue.bind(this);
    }

    componentDidMount() {
        console.log('useEffect one time')
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
    const setNewValue = ()=> setValue(value + 1);
    useEffect(() => {
        console.log('useEffect one time')
    }, []);

    return (
        <div>
            <h1>Hello,{value}</h1>
            <button onClick={setNewValue}>Click</button>
        </div>
    )
}



export  default ErrorBoundary;