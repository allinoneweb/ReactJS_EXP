import React,{Component} from 'react';

class JSXInlinStyle extends Component{
    render(){
        var myStyle={
        fontSize:50,
        color: 'Red'  
        }
        return(
            <h1 style = {myStyle}>www.allinoneweb.net</h1>  
        );
    }
}
export default JSXInlinStyle;