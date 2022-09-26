import React, { Component } from 'react'
// import React from 'react'
// import BaseCtl from './BaseCtl'
// import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
import FormMessage from './FormMessage';
import Ragistration from './Ragistration';
import Login from './Login';
import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
    

export default class AdminLogin extends Component {
    // constructor(props) {
    //     super();
    //     this.state={
    //         inputError:{
    //             id:'',
    //             userId:'',
    //             password:'',
    //             error:'',
    //             message:'',
    //         },
    //         form:{
    //             id:'',
    //             userId:'',
    //             password:'',
    //         }
    //     }
    //     const styles = {
    //         color: 'purple',
    //         fontSize: '40px',
    //         border: '2px solid purple'
    //       }
          
    // }
    
        
    
  render() {
    return (
      <>
       <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="ragistration">Ragistration</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="Ragistration" component={Ragistration}  />
      <Route path="/login" key="Login" component={Login}  />
      </Switch>
      </Router>
         {/* <div className="center" >
            
            <form>
                    <table>
                        <h2 align="center">Login Form</h2>
                            {(() => {
                                if (this.state.error) {
                                    return (
                                        <>
                                        <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
                                        </>
                                    ) 
                                }
                                return null;
                            })()}
                       
                        <label>User ID : </label>
                        <p>
                            <input name="userid"  value={this.state.form.userId}
                                placeholder="Enter User ID"
                                onChange={(event) => this.changeFormState(event)} required />
                        </p>
                        <div>
                            <h6 class="errormessage">{this.state.inputError.userId}</h6>
                        </div>

                        <label>  Password :</label>
                        <p>
                            <input name="password" type={'password'} value={this.state.form.password}
                                onChange={this.changeFormState}
                                placeholder="Enter Password" required  /> 
                        </p>
                        <h6 class="errormessage">{this.state.inputError.password}</h6>
                        <br></br>
                        <Button type='button' 
                            onClick={(event) => this.signin(event)}>Signin</Button> &nbsp; &nbsp;
                        <Button type='reset' variant="danger"
                            onClick={(event) => this.resetForm(event)}>Reset</Button>
                            
                    </table>
                    <br></br>
         </form>
      </div> */}
      </>
    )
  }
}
