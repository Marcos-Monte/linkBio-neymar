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
     <a href="https://link-bio-neymar-eta.vercel.app/">📱 Visit this Project</a>
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

- How to clone the project

```bash
git clone https://github.com/Marcos-Monte/linkBio-neymar
```
<h3>Setting up Video Loader</h3>

- To handle video files in Next.js, a loader needs to be configured. You can use either 'file-loader' or 'url-loader'. Install one of them as a development dependency:

```bash
npm install --save-dev file-loader
# or
yarn add --dev file-loader
```
- Configure the 'next.config.js' file accordingly:

- Example using 'file-loader'

```bash
# next.config.js

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
```

- Example using 'url-loader'

```bash
# next.config.js

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

```

<h3 id="started">🚀 Getting Started</h3>

- Navigate to the project directory:

```bash
cd linkBio-neymar
```

- Install project dependencies:

```bash
npm install
```

- Run the project in development mode:

```bash
npm run dev
```

