import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          error: ""
        };
    }
    

    handleSignIn = async e => {
        e.preventDefault()
        const { email, password } = this.state
        if(!email || !password){
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        }else{
            try {
                const headear = {
                    headers: {
                        "Access-Control-Allow-Origin": "true"
                    }
                }
                const response = await api.post("/sessions", { email, password }, headear);
                login(response.data.token);
                this.props.history.push("/admin/products");
                console.log("1");
            } catch (err) {
                console.log("a");
                this.setState({
                    error:
                      "Houve um problema com o login, verifique suas credenciais. T.T"
                });          
            }
        }
    };
    render(){
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="Logo Zuum Delivery" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/signup">Criar conta grátis</Link>
                </Form>
            </Container>
        );
    }
}
export default withRouter(SignIn);
