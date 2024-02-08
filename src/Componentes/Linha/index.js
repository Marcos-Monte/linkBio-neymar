import Image from "next/image";

import style from './Linha.module.css';

export default function Linha(props) {
    return (
        <tr>
            <td className={style.celula}>
                <div className={style.container_time}>

                    <Image
                        className={style.imagem}
                        src={props.imagem}
                        alt={`Logo ${props.time}`}
                    />
                    <p>{props.time}</p>
                </div>
            </td>
            <td className={style.celula}>{props.temporadas}</td>
            <td className={style.celula}>{props.jogos}</td>
            <td className={style.celula}>{props.gols}</td>
            <td className={style.celula}>{props.assistencias}</td>
            <td className={style.celula}>{props.titulos}</td>
        </tr>
    )
}