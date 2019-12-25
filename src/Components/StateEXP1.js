import React,{Component} from 'react';

class StateEXP1 extends Component{
constructor(){
    super();
    this.state={
        Name:'adi',
        Id:101,
        Email:'jc.adi101@gmail.com'
    }
}
    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.Id}-{this.state.Name}</h1>
                    <h2>{this.state.Email}</h2>
                </div>
            </div>
        );
    }
}
export default StateEXP1;