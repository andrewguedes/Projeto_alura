import React, { Component } from 'react';
import InputCustom from './InputCustom';
import InputCustomUrl from './InputCustomUrl';
import PrimaryButton from './PrimaryButton';
import SignupApi from '../logicas/SignupApi';
import { browserHistory } from 'react-router';

class Signup extends Component {
    constructor() {
        super();
        this.state = { login: '', senha: '', confirmacao: '', url: '', msg: [] };
    }

    realizaCadastro(event) {
        event.preventDefault();
        if (this.signupValidation()) {
            SignupApi.sendSignup(this.state.login, this.state.senha, this.state.url)
                .then(res => {
                    if (res.ok) {
                        browserHistory.push('/');
                    } else {
                        console.log('Erro', res);
                        this.setState({ msg: [`Não foi posível cadastrar o usuário ${this.state.login}.`] })
                        this.cleanForm();
                    }
                })
                .catch(error => console.log(error));
        }
    }

    saveChange(nameInput, event) {
        this.setState({ [nameInput]: event.target.value });
    }

    signupValidation() {
        if (this.state.login === this.state.senha || this.state.senha !== this.state.confirmacao) {
            this.setState({ msg: ['Senha não confere', 'Senha igual ao username'] })
            return false;
        }
        return true;
    }

    cleanForm() {
        this.setState({ login: '', senha: '', confirmacao: '', url: '' });
    }

    render() {
        return (
            <div className="signup-container">
                <h1>Signup</h1>
                <span>{this.state.msg[0]}</span>
                <span>{this.state.msg[1]}</span>
                <form className="signup-container-form" onSubmit={this.realizaCadastro.bind(this)}>
                    <InputCustom id="login" type="text" name="login" value={this.state.login} onChange={this.saveChange.bind(this, 'login')} label="Login" className="signup-input" />
                    <InputCustom id="senha" type="Password" name="senha" value={this.state.senha} onChange={this.saveChange.bind(this, 'senha')} label="Senha" className="signup-input" />
                    <InputCustom id="confirmacao" type="Password" name="confirmacao" value={this.state.confirmacao} onChange={this.saveChange.bind(this, 'confirmacao')} label="Confirmação" className="signup-input" />
                    <InputCustomUrl id="url" type="text" name="url" value={this.state.url} onChange={this.saveChange.bind(this, 'url')} label="URL do perfil" className="signup-input" />
                    <PrimaryButton type="submit" label="Signup" className="signup-button" />
                </form>
            </div>
        );
    }
}

export default Signup