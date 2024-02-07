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


