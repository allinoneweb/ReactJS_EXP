import React,{Component} from 'react';

class StateEXP2 extends Component{
constructor(){
    super();
    this.state={
        Name:'adi',
        Id:101,
        Email:'jc.adi101@gmail.com'
    }
    this.updateName=this.updateName.bind(this);
}
updateName()
{
    this.setState({Name:'JC adi'});
}


    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.Id}-{this.state.Name}</h1>
                    <h2>{this.state.Email}</h2>
                    <button onClick={this.updateName}> Change Name as JC adi </button>  
                </div>
            </div>
        );
    }
}
export default StateEXP2;