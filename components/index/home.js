import React, { Component } from "react";
import Link from 'next/link'

class Home extends Component {

    render(){
        const props = this.props
        return (
            <div class="content">
                <div class="container bg-white">
                    <div class="header clearfix pt-3 text-center">
                        <h3 class="text-muted z">
                            <b>
                            ReactJS Chat
                            </b>
                        </h3>
                    </div>
                    <hr/>
                    <div class="row marketing">
                        <div class="col-lg-12">
                            <h4>
                            <strong>Objetivo</strong>
                            </h4>
                            <p>Este projeto tem como o objetivo, testarmos as interações básicas de ReactJS para manuseio de uma tela simples de chat.</p>
                            <hr/>
                            <h5>
                            <strong>Tecnologias Back End</strong>
                            </h5>
                            <ol>
                            <li>
                                <p>
                                    <b>Json server</b>:
                                    <br/>
                                    Como backend utilizamos um server simples para proporcionar uma API para persistencia das mensagens
                                </p>
                            </li>
                            </ol>
                            <h5>
                            <strong>Tecnologias Front End</strong>
                            </h5>
                            <ol>
                            <li>
                                <p>
                                    <b>ReactJS</b>:
                                    <br/>
                                    para manuseio dos compontentes necessários.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Axios</b>
                                    <br/>
                                    para requisições Http ao server.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>NextJS</b>:
                                    <br/>
                                    Para controle de rotas.
                                </p>
                            </li>
                            </ol>
                            <h5>
                            <strong>Design Patterns</strong>
                            </h5>
                            <ol>
                            <li>
                                <p>
                                    <b>DAO</b>:
                                    <br/>
                                    Abstração de objetos para acesso a dados
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Strategy</b>:
                                    <br/>
                                    Padrão destinado a classes separadas com metodos intercabiaveis
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Observer</b>:
                                    <br/>
                                    Padrão destinado a monitorar evento de estados e disparar gatilhos a partir deles
                                </p>
                            </li>

                            <li>
                                <p>
                                    <b>Command</b>:
                                    <br/>
                                    Padrão destinado a colocar uma fila de execução de funções para garantir uma sequencia ordenada de tarefas
                                </p>
                            </li>
                            </ol>
                        </div>
                    </div>
                    <div class="clearfix pt-3 text-center">
                        <Link href="/chat">
                        <button class="btn btn-success">  
                        Ir para o chat
                        </button>
                        </Link>
                    </div>
                    <footer class="footer">
                        <p> Criado por: Alexsandro, 2021</p>
                    </footer>
                </div>
                </div>
        )
    }
}


export default Home
