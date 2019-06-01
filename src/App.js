import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Login from "./component/Login.jsx";
import Temp from "./component/Temp.jsx";
import DashboardAdmin from "./component/DashboardAdmin.jsx";

class App extends Component {
  state = {
    data:{},    
    loading: false,
    pass: true,
    isLogin: false
  };
  render() {
  return (
      
    // <div>{this.state.isLogin ? (
    //   <div>
    //   <DashboardAdmin data={this.state.data}/>
    //   </div>
    // ) : (
    //   <Login
    //     onSubmit={this.handleSubmit}
    //     loading={this.state.loading}
    //     pass={this.state.pass}
    //   />
    // )}</div>
//  <DashboardAdmin data={this.state.data}/>
 <Temp />
   
//     
  
    
  );}
  handleSubmit = event => {
    event.preventDefault();
    // console.log("id", event.target[0].value);
    this.setState({ pass: true });
    this.setState({ loading: true });
    this.login(event.target[0].value, event.target[1].value);
    event.target.reset();   


  };
  login = (id, pass) => {
    //email=admin@fenil.com&password=admin
    
    let bodyLogin ={email:id,password:pass};
    // let bodyLogin ="email="+id+"&password="+pass;
    // {Email: id, Password: pass}
    

    axios
      .post("http://localhost:3000/login", bodyLogin)
      .then(res => {
        

         console.log(res.data);
         console.log(`res.data.toString()=="false" `,res.data.toString()=="false" );
         
         if(res.data.toString()=="false")

         { console.log("1");
           this.setState({ pass: false })
           this.setState({ loading: false }); ;
           
        }else{
          console.log("2");
          this.setState({ pass: true });    
         this.setState({ loading: false });    
         this.setState({ data: res.data});
         this.setState({ isLogin: true });
           
        }
        
      })
      .catch(err => {
        console.log(err);
      });

    // axios
    // .post("http://test.bhavitechnologies.com/api/Login", bodyLogin, {
    //   headers: { "Content-Type": "application/json" }
    // })
    // .then(res => {
    //     console.log(res);
    //       })
    // .catch(err => {
    //   console.log(err);
    // });
  };
}

export default App;
