import style from './Estatisticas.module.css';

import { estatisticas } from '@/Dados';
import Linha from '../Linha';

function Estatisticas() {
    return (
        <section className={style.container}>

            <h2 className='tituloGlobal'>Estatísticas</h2>

            <table className={style.tabela}>
                <tr>
                    <th>Times</th>
                    <th>Temporadas</th>
                    <th>Jogos</th>
                    <th>Gols</th>
                    <th>Assistências</th>
                    <th>Títulos</th>
                </tr>
                {
                    estatisticas.map(
                        (estatistica, index) => (
                            <Linha
                                key={index}
                                imagem={estatistica.imagem}
                                time={estatistica.time}
                                temporadas={estatistica.temporadas}
                                jogos={estatistica.jogos}
                                gols={estatistica.gols}
                                assistencias={estatistica.assistencias}
                                titulos={estatistica.titulos}
                            />
                        )
                    )
                }
            </table>
        </section>
    )
}

export default Estatisticas;