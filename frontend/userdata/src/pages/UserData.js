import React, {Component} from 'react';
// import Header from '../../componentes/Header/Header';
// import Footer from '../../componentes/Footer/Footer';

class UserData extends Component {
    componentDidMount() {
        //this.getProduto();
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
                        <h1>Cadastro de informações de Usuário</h1>
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
                    </div>

                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default UserData;