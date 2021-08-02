import React from 'react';
import {employees} from './db.json';

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state={
            arr:[],
            inputValue:''
        }
    }

      findObject = (obj = {}, key, value)=> {
        const result = [];
        const recursiveSearch = (obj = {}) => {
           if (!obj || typeof obj !== 'object') {
           return;
        };
        if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(value.toLowerCase()) ){
           result.push(obj.name);
        };
        Object.keys(obj).forEach(function (k) {
           recursiveSearch(obj[k]);
        });
     } 
     recursiveSearch(obj);
     return result;
     } 

    handleInputChange=(event)=>{
event.preventDefault();
this.setState({inputValue:event.target.value});
    }

    handleChange=()=>{
        const res = this.findObject(employees, 'name', this.state.inputValue);
        if(res.length>0){
        this.setState(
            {arr:res}
        )}else{
            let tempArr=[];
            tempArr.push('No result found')
            this.setState(
                {arr:tempArr} 
            )}
    }

render(){
    return(
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
            <button onClick={this.handleChange} >Search</button>
            <ul>
        {this.state.arr.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
        
    </div>
    );
}
}


export default Employee;