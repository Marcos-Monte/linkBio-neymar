import Image from 'next/image';

import style from './Link.module.css';

export default function Link(props) {
    return (
        <a className={style.ancora} href={props.url}>

            <Image className={style.imagem}
                src={props.imagem}
                alt={props.nome}
            />
            <p>{props.descricao}</p>

        </a>
    )
}