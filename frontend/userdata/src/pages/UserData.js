import React, {Component} from 'react';
// import Header from '../../componentes/Header/Header';
// import Footer from '../../componentes/Footer/Footer';

class UserData extends Component {
    componentDidMount() {
        //this.getProduto();
    }

    insertInformationSelected() {
        document.getElementById("name").value = "William Camargo";
        document.getElementById("tel").value = "(11) 96075-4257";
        document.getElementById("email").value = "williamcamargosilva@gmail.com";
    }

    clearInputText(){
        document.getElementById("name").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <main className="container">
                    <div className="box-cad-user">   
                        <span>Cadastro de informações de Usuário</span>
                        <form className="form-Cad"> 
                            <label>Nome</label>
                            <input type="text" id="name" placeholder="digite seu nome aqui"/>

                            <label>Celular</label> 
                            <input type="text" id="tel" placeholder="(00)00000-0000"/>

                            <label>E-mail</label> 
                            <input type="email" id="email" placeholder="digite seu e-mail aqui"/>   
                        </form>

                        <div className="btn-edition">
                            <a href="#">SALVAR</a>
                            <a href="#">EDITAR</a>
                            <a href="#">EXCLUIR</a>
                            <a href="#" onClick={() => this.clearInputText()}>LIMPAR</a>
                        </div>

                        <span>Lista de Usuários Cadastrados</span>
                        <table className="table-list">
                            <tr>
                                <th>Nome</th>
                                <th>Celular</th>
                                <th>E-mail</th>
                                <th></th>
                            </tr>
                            
                            <tr>
                                <td>William Camargo</td>
                                <td>(11) 96075-4257</td>
                                <td>williamcamargosilva@gmail.com</td>
                                <td><a href="#" onClick={() => this.insertInformationSelected()}>SELECIONAR</a></td>
                            </tr>
                            
                        </table>
                    </div>

                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default UserData;