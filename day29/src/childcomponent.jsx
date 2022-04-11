import { Component } from "react";
import PropTypes from 'prop-types'
 
class ChildComp extends Component{
   /*  static defaultProps = {
        title : 'default child title',
        version : 10
    } */
    static propTypes = {
        title : PropTypes.string.isRequired ,
        version : PropTypes.number.isRequired
    }
    render(){
        return <div>
                    {/*  
                    <h3>Title : { this.props.title ||  'default child title'}</h3>
                    <h3>Version : { this.props.version || 5 }</h3> 
                    */}

                    <h3>Title : { this.props.title }</h3>
                    <h3>Version : { this.props.version }</h3>
                </div>
    }
}
 
export default ChildComp	
 