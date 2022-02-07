import React, {useState, useEffect} from "react";

//in Class component another complication may arise if you need to use eventListeners
//first you have to bind it
//then you have to add it to componentDidMount()
//then you have to remove it in componentWillUnmount()


//in Functional component it is much shorter and compact
//add and remove eventListeners is used in one function only

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
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        console.log('useEffect one time')

        if (this.state.value === 1) {
            console.log('value === 1')
        }
        document.body.addEventListener('scroll', this.onScroll);
        document.body.addEventListener('scroll', this.onScroll);
        document.body.addEventListener('scroll', this.onScroll);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.value1 !== prevState.value1) {
            console.log('useEffect worked when value1 changed')
        }

        if (this.state.value2 !== prevState.value2) {
            console.log('useEffect worked when value2 changed')
        }

    }

    componentWillUnmount() {
        document.body.removeEventListener('scroll', this.onScroll);
        document.body.removeEventListener('scroll', this.onScroll);
        document.body.removeEventListener('scroll', this.onScroll);
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
        document.body.addEventListener('scroll', onscroll);

        return () => {
            document.body.removeEventListener('scroll', onscroll);
        }
    }, []);


    useEffect(() => {
        console.log('useEffect worked one time')
    }, [value]);

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