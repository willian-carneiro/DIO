// TODO: Tratar erro de limite de uso atingido
// TODO: Criar os sistemas visualização avançada
// => filtro (Linguagem)
// => busca (Nome, Descrição)
// => ordenamento (Nome, Data de Criação, Data de Atualização, Acompanhando, Forks, Estrelas - pra cima ou pra baixo)

import React, { useEffect, useState } from "react";
import Usuario from "./components/Usuario";
import Projeto from "./components/Projeto";
import { AiOutlineSearch } from "react-icons/ai";
import api from "./service/api";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState("");
  const [usuario, setUsuario] = useState<any>({});
  const [projetos, setProjetos] = useState<any[]>([]);

  const handleScroll = () => {
    const chegouNoFundo =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    const numeroProjetos = projetos.length;
    const totalProjetos = usuario.public_repos;
    const existeUsuario = usuario.id;
    if (
      existeUsuario &&
      chegouNoFundo &&
      numeroProjetos > 0 &&
      numeroProjetos < totalProjetos
    )
      pegarProjetos();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const buscar = async () => {
    if (busca !== "") {
      setPagina(() => 1);
      try {
        pegarUsuario();
        try {
          pegarProjetos(true);
        } catch (e) {
          setProjetos(() => []);
        }
      } catch (e: any) {
        // console.log(e.response.status)
        setUsuario(() => {});
        setProjetos(() => []);
      }
    }
  };

  const pegarUsuario = async () => {
    const respostaUsuario = await api.get(`${busca}`);
    setUsuario(respostaUsuario.data);
    setProjetos(() => []);
    setPagina(() => 1);
  };

  const pegarProjetos = async (novoUsuario?: boolean) => {
    // console.log("pegando projetos na página " + pagina);
    const respostaProjetos = await api.get(
      `${busca}/repos?page=${novoUsuario ? 1 : pagina}&per_page=30`
    );
    setProjetos((projetos) => [...projetos, ...respostaProjetos.data]);
    setPagina((pagina) => pagina + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  const buscaInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && busca !== "") buscar();
  };

  const buscaBotao = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (busca !== "") buscar();
  };

  const remover = (id: number) => {
    setProjetos((projetos) => {
      return projetos.filter((projeto) => projeto.id !== id);
    });
  };

  return (
    <main className="main">
      <header className="header">
        <img
          src={require("./assets/GikiHub.png")}
          alt="Logo do GikiHub"
          className="logo"
        />
        <h1 className="gikihub">Giki Hub</h1>
      </header>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por usuário"
          value={busca}
          onChange={handleInput}
          className="input"
          onKeyDown={buscaInput}
        />
        <button onClick={buscaBotao} className="buscar">
          <AiOutlineSearch color="#FFFFFF" size={25} />
        </button>
      </div>
      <Usuario usuario={usuario} />
      {projetos.length > 0 && (
        <section className="projeto">
          <h2 className="titulo_projeto">Repositórios</h2>
          {/* <div className="filtros">
            <p>Input de Busca</p>
            <p>Filtro</p>
            <p>Ordenador</p>
          </div> */}
          {projetos.map((projeto) => (
            <Projeto key={projeto.id} projeto={projeto} remover={remover} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
