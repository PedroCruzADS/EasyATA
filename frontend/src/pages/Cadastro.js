import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importando a api
import api from "../service/api";

import imagens from "../assets/img2.png";
import './cadastro.css';

function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha ] = useState('') 

    async function handleCadastrar(e){
        e.preventDefault()

        const data = {
            nome,
            email,
            login,
            senha,
        };
        try{
        const response = await api.post('usuario', data);
        alert('Sucesso')
        }catch(err){
            alert('Erro')
        }
    }
    return (
<div className="container shadow">
            <div className="row no-gutter centered">   
                {/*aqui vem a parte direita*/}
                <div className="col-md-5" style={{background:"#F0F1F3"}}>
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto">
                                        <div className="mb-5 text-center">
                                            <p>Faça o seu cadastro no EasyATA !</p>
                                        </div>
                                    <form onSubmit={handleCadastrar}>
                                        <div className="form-group mb-4">
                                            <input id="nome" type="text" placeholder="Digite seu nome:" className="form-control" 
                                            value={nome}
                                            onChange={e => setNome(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input id="email" type="text" placeholder="Digite seu e-mail:" className="form-control" 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input id="login" type="text" placeholder="Crie um login:" className="form-control" 
                                            value={login}
                                            onChange={e => setLogin(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input id="senha" type="password" placeholder="Crie uma Senha:" className="form-control"
                                            value={senha}
                                            onChange={e => setSenha(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
                                        <div className="sign-up">
                                            Já possui uma conta? <Link to="/">Entre !</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*aqui vem a parte esqueda*/}
                <div className="col-md-7 bg-esquerda">
                    <div className="login d-none d-md-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto welcome">
                                    <form>
                                        <div className="mb-4">
                                            <img src={imagens} alt="documento" height="100%" width="50%"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>Seja bem vindo ao EasyATA</p>
                                        </div>
                                    </form>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>   
    )
}

export default Cadastro
