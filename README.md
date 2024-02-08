<h1 align="center" style="font-weight: bold;">Neymar Jr. Link Bio 💻</h1>

<p align="center">
 <a href="#layout">Layout</a> • 
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a>
</p>

<p align="center">
    <b>This is a FrontEnd web development project designed to showcase an interactive Link Bio for Neymar Jr., highlighting his social media presence and on-field statistics. In the Links section, you'll find links to his major social media profiles, and in the Statistics section, there is a table detailing his performance with teams he has been a part of. The experience is enhanced with a looping video featuring memorable moments and an iconic image of Neymar Jr. celebrating a goal.</b>
</p>

<p align="center">
     <a href="https://next-restaurant-ecru.vercel.app/">📱 Visit this Project</a>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="public\layout do projeto\layout-linkbio-neymar.png" alt="Layout" width="400px" height="600px">
</p>

<h2 id="tech">💻 Technologies</h2>

- Next.js
- React.js
- JavaScript
- Semantic HTML
- Git / Github

<h3>Prerequisites</h3>

- Framework React: [NextJS](https://nextjs.org/)
- Ambiente JavaScrip: [NodeJS](https://nodejs.org/en)
- Controle de Versão: [Git](https://git-scm.com/)

<h3>Cloning</h3>

How to clone the project

```bash
git clone https://github.com/Marcos-Monte/next-restaurant
```

<h3>Getting Started</h3>

How to start the project

```bash
cd next-restaurant
npm run dev
```
<h3>Address</h3>

## O webpack não vem configurado para lidar com arquivos do tipo '.mp4'
- no Next.js é necessário configurar um loader adequado para lidar com videos
- Podendo ser o pacote 'file-loader' ou 'url-loader'
- Instale um dos dois como dependencia no projeto

npm install --save-dev file-loader


## Configurar o 'next.config.js'
- Configurando para adicionar o loader de arquivos de vídeo.

#### Exemplo 'file-loader'
// next.config.js

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};


#### Exemplo 'url-loader'

// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

export default nextConfig;


