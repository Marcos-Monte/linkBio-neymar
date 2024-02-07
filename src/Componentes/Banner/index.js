import Image from "next/image";

import Link from "@/Componentes/Link";
import { links } from "@/Dados";
import ImagemNeymar from '../../../public/Assets/Img/neymar.jpg';

import style from './Banner.module.css';


const Banner = () => {
    return (
        <section className={style.banner}>

            <video className={style.video} autoPlay loop muted>
                <source src='/Video/videoneymar.mp4' type='video/mp4'></source>
            </video>

            <div className={style.infos}>

                <div className={style.borda_gradiente}>

                    <Image
                        className={style.imagem}
                        src={ImagemNeymar}
                        alt='Neymar Junior'
                    />
                </div>

                <h1 className={style.titulo}>Neymar Jr</h1>

            </div>

            <div className={style.lista}>
                {

                    links.map(

                        (link, index) => (

                            <Link
                                key={index}
                                imagem={link.imagem}
                                nome={link.nome}
                                descricao={link.descricao}
                            />
                        )

                    )

                }
            </div>
        </section>
    )
}

export default Banner;