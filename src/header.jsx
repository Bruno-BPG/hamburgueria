import PesquisaFiltro from "./components/pesquisarFiltro"
import {useState } from "react";


function Header ({ filtrar , setProdutos}){
    
  const [inputPesquisa, setInputPesquisa] = useState("");

    return (
    <header className="App-header">
    <div>
      <p className="logo">
        Burguer <span className="vermelho">Kenzie</span>
      </p>
    </div>
    <div>
      <form
        onSubmit={(event) =>
            PesquisaFiltro(event, filtrar, setProdutos, inputPesquisa)
        }
      >
        <input
          id="barraDePesquisa"
          onChange={(event) => setInputPesquisa(event.target.value)}
        ></input>
        <button id="btnDePesquisa" type="submit" className="btnPesquisa">
          Pesquisar
        </button>
      </form>
    </div>
  </header>
  )
}

export default Header