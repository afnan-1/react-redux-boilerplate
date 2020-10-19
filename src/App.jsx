import { fireEvent } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';
import firebase from './config/firebase'
import AppRouter from './config/router'
import {connect} from 'react-redux'
import {set_Data} from './store/action/action'
class App extends Component {
  state = {  }
  render() { 
    return (
    <div>
      {console.log(this.props)}
      <button onClick={()=>this.props.set_data('hello button')}>Set data</button>
    </div>
     );
  }
}
const mapStateToProps = (state)=>({
 name:state.app.app
})
const mapDispatchToProp = (dispatch)=>({
  set_data:(data)=> dispatch(set_Data(data))

})
export default connect(mapStateToProps,mapDispatchToProp)(App);
// class App extends Component {
//   state = { 
//     name:[{title:'afnan',edit:false}],
//     value:''
//    }
//    add_todo = ()=>{
//      let obj = {title:this.state.value,edit:false}
//      firebase.database().ref('/').child('todos').push(obj)
//      this.setState({
//        name:[...this.state.name,obj],
//        value:'',
//        temp:''
//      })
//    }
//    delete_todo=(i)=>{ 
//     this.state.name.splice(i,1)
//     this.setState({name:this.state.name})
    
//    }
//    edit_todo=(e,i)=>{
//     //  let pro = prompt('likh',this.state.name[i].title)
//       this.state.name[i].edit= true
//       this.setState({
//         name:this.state.name
//       })
//     }
//     handleChange=(e,i)=>{
//       this.state.name[i].title=e.target.value
//       this.setState({
//         name:this.state.name
//       })
//     }
//     update=(i)=>{
//       this.state.name[i].edit= false
//       this.setState({
//         name:this.state.name
//       })
//     }
//     del_all=()=>{
//       this.state.name.splice(0,this.state.name.length)
//       this.setState({
//         name:this.state.name
//       })
      
//     }
//     render() { 
//     let {value,name} = this.state
//     return (
//       <div>
//         <input type="text" value={value} onChange={(e)=> this.setState({value:e.target.value})}/>
//         <button onClick={this.add_todo}>click me</button><button onClick={this.del_all}>Delete all</button>
//         <ul>{this.state.name.map((v,i)=> <li key={i}>{v.edit?<input type='text' value={v.title} onChange={(e)=>this.handleChange(e,i)}/>:v.title}
//         {v.edit?<button onClick={(e)=>this.update(i)}>Update</button>
//         : <button onClick={(e)=>this.edit_todo(e,i)}>Edit</button>} <button onClick={()=>this.delete_todo(i)}>Delete</button> </li> )}</ul>
//       </div>
//       );
//   }
// }
 
// export default App;
