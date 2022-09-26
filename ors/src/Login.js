import React from 'react'
import BaseCtl from './BaseCtl'
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
import FormMessage from './FormMessage';
// import Ragistration from './Ragistration';
import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
    

class Login extends BaseCtl {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                userid: '',
                password: '',
                message: '',
                error: '',
            },

            form: {
                userid: "",
                password: "",
            
        },
        
        };
        localStorage.setItem('Name', "Ankit");
    }
/**to display the links by dashboard and signin */
    signin() {
        if (this.state.form.userid == "anky" && this.state.form.password == "vermaji" ) {
            //to render the dashboard 
            ReactDOM.render(
                <React.StrictMode>
                    <Dashboard />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
        
        else if (this.state.form.userid == "" || this.state.form.password == "")
     {
            if (this.state.password == "") {
                this.changeInputError("password", "Password Is Null")
            }
            if(this.state.userid == "") {
                this.changeInputError("userid", "Userid Is Null")
            }
        }
        else {
            this.changeInputError("message", "Invalid User Id And Password");
            this.changeInputError("error", "true");
            this.changeInputError("userid", "");
            this.changeInputError("password", "");
        }
    }
    resetForm = () => {
        this.setState({
            form:{
                userid: "",
                password: "",
               
            }
        })
    } 
    
    render() {
        return (
            <>
            {/* <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="ragistration">Ragistration</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="ragistration" component={Ragistration}  />
      </Switch>
      </Router> */}
            <div className="center" >
            
                <form>
                        <table>
                            <h2 align="center">Login</h2>
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
                                <input name="userid"  value={this.state.form.userid}
                                    placeholder="Enter User ID"
                                    onChange={(event) => this.changeFormState(event)} required />
                            </p>
                            <div>
                                <h6 class="errormessage">{this.state.inputError.userid}</h6>
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
          
            </div>
            </>
         
        );
    }
}
export default Login

