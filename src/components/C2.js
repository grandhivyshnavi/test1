import {Component} from 'react';
import C3 from './C3';
class C2 extends Component{
    constructor(){
        super();
        console.log("I am constructor method");
        this.state={brand:"nike",toggle:true}
    }

    static getDerivedStateFromProps(){
        console.log("I am getDerivedStateFromProps method");
    }

    componentDidMount(){
        console.log("I am componentDidMount method");
    }

    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate method");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate(){
        console.log("I am componentDidUpdate method");
    }
    render(){
        console.log("I am render method");
        return(
            <div>
                <h1>Lifecycle methods</h1>
                <h2>{this.state.brand}</h2>
                <button onClick={()=>{this.setState({brand:"adidas"})}}>Click</button>
                {
                    (this.state.toggle)?<C3/>:null
                }
                <button onClick={()=>{this.setState({toggle:false})}}>Unmount</button>
            </div>
        )
    }
}
export default C2;