import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseCtl from './BaseCtl';
import FormError from './FormError'
import FormMessage from './FormMessage'

export default class user extends BaseCtl {
  constructor(props) {
    super(props);
    this.state={
      inputError:{
        id:'',
        firstName:'',
        lastName:'',
        loginId:'',
        roleId:'',
        message:'',
        error:''


      },
      form:{
        id:'',
        firstName:'',
        lastName:'',
        loginId:'',
        roleId:'',
        

      },
    };
  
  const styles = {
    color: 'purple',
    fontSize: '40px',
    border: '2px solid purple'
  }
  if ( 
    this.props.match.params.pid) {
    this.get();
  }
}

get() { 
  let id = this.props.match.params.pid;
  console.log(id);
  var url = "http://api.sunilos.com:9080/ORSP10/Auth/get/" + id;
  let _self= this;
  axios.get(url).then((res) => {
    this.setState({ form: res.data.result.data });
  });
} 

save() {
  let url = "http://api.sunilos.com:9080/ORSP10/Auth/save";    
  axios.post(url,this.state.form).then((res) => {
    this.setState({ list: res.data.result.data });
    if (res.data.result.inputerror) {
      this.setState({ inputError: res.data.result.inputerror });
      this.changeInputError("error", "true")
    }  
    else {
      this.changeInputError("error", "false")
      this.changeInputError("message", "Data saved Successfully");
      this.changeInputError("id", "")
      this.changeInputError("firstName", "")
      this.changeInputError("lastName", "")
      this.changeInputError("loginId", "")
      this.changeInputError("roleId", "")
    }
  });
}
render() {
  return (
    <>
      <div className='center'>
        <Form id="sign-in-form" className="text -left p-3 w-50" >
          <table align="center">
            {(() => {
              if (!this.props.match.params.pid) {
                return (
                  <h2 align='center'>Add User</h2>
                )
              } 
              if (this.props.match.params.pid) {
                return (
                  <h2 align='center'>Update User</h2>
                )
              }
            })()}
            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
            <p>
              <input
                type="number"
                name="id"
                value={this.state.form.id}
                onChange={this.changeFormState} hidden />
            </p>
            <label>First Name:</label>
            <p>
              <input
                type="text"
                name="firstName"
                value={this.state.form.firstName}
                onChange={this.changeFormState} required />
            </p>

            <div><FormError errorname={this.getInputError("firstName")} /></div>

            <label> last Name:</label>
            <p>
              <input
                type="text"
                name="lastName"
                value={this.state.form.lastName}
                onChange={this.changeFormState} required ></input>
            </p>
            <div>
              <div><FormError errorname={this.getInputError("lastName")} /></div>
            </div>
           
            <label>login Id:</label>
            <p>
              <input
                type="text"
                name="loginId"
                value={this.state.form.loginId}
                onChange={this.changeFormState} required></input>
            </p>

            <div><FormError errorname={this.getInputError("loginId")} /></div>

            <label>Role id:</label>
            <p>
              <input
                type="text"
                name="roleId"
                value={this.state.form.roleId}
                onChange={this.changeFormState} required></input>
            </p>
            <div><FormError errorname={this.getInputError("roleId")} /></div>
            
            <br></br>
            
            <Button  type='button'
              onClick={(event) => this.save(event)}>Save</Button>
          </table>
        </Form>

      </div>
            
    </>
  )
}
}
