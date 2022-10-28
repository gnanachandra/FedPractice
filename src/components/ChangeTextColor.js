import React,{Component} from 'react';
export class ChangeTextColor extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showRed:true,
            showYellow:false,
            showGreen:false
        };
    };
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({showRed:false,showYellow:true,showGreen:false});
        },3000)
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(this.state.showRed)
        {
            setTimeout(()=>{
                this.setState({showRed:false,showYellow:true,showGreen:false});
            },3000);
        }
        if(this.state.showYellow)
        {
            setTimeout(()=>{
                this.setState({showRed:false,showYellow:false,showGreen:true});
            },3000);
        }
        if(this.state.showGreen)
        {
            setTimeout(()=>{
                this.setState({showRed:true,showYellow:false,showGreen:false});
            },3000);
        }

    }
    render()
    {
        return (
            <div>
                <div className={this.state.showRed?"red-color":"circle"}></div>
                <div className={this.state.showYellow?"yellow-color":"circle"}></div>
                <div className={this.state.showGreen?"green-color":"circle"}></div>
            </div>
        )
    }
}
export default ChangeTextColor;