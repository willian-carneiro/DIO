import { TbGitFork } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineEye, AiFillStar } from "react-icons/ai";
import "./style.css";
import tratarData from "../../utils/tratarData";
import tratarNumero from "../../utils/tratarNumero";

// Número de commits...

export default function Projeto({projeto, remover}: {projeto: any, remover: (id: number) => void}) {
  return (
    <div className="card_projeto">
      <div className="conteudo_projeto">
        <div>
          <h3 className="nome_projeto">{(projeto.name).replaceAll("-", " ").replaceAll("_", " ")}&nbsp;</h3> 
          <span className="metadado_projeto"> #{projeto.id}</span>
          <p className="metadado_projeto">Criado em {tratarData((projeto.created_at).slice(0, 10))}</p>
          <p className="metadado_projeto">Atualizado em {tratarData((projeto.updated_at).slice(0, 10))}</p>
          <p className="descricao_projeto">
            {projeto.description}
          </p>
          {projeto.language && <p className="linguagem_projeto">{projeto.language}</p>}
        </div>
        <div className="dados_projeto">
          <p className="dado_projeto"><AiFillStar /> {tratarNumero(projeto.stargazers_count)}</p>
          <p className="dado_projeto"><TbGitFork /> {tratarNumero(projeto.forks_count)}</p>
        </div>
      </div>
      <div className="acoes_projeto">
        <a href={projeto.html_url} target={'_blanck'}>
          <MdOpenInNew color="#AAAAAA" size={25} />
        </a>
        <br />
        <button className="remover_repo" onClick={() => remover(projeto.id)}>Remover</button>
      </div>
    </div>
  );
}
