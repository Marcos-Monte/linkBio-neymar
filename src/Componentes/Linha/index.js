import Image from "next/image";

import style from './Linha.module.css';

export default function Linha(props) {
    return (
        <tr>
            <td>
                <div className={style.container_time}>

                    <Image
                        className={style.imagem}
                        src={props.imagem}
                        alt={`Logo ${props.time}`}
                    />
                    <p>{props.time}</p>
                </div>
            </td>
            <td>{props.temporadas}</td>
            <td>{props.jogos}</td>
            <td>{props.gols}</td>
            <td>{props.assistencias}</td>
            <td>{props.titulos}</td>
        </tr>
    )
}