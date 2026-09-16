# Tarefa IN FEED - In Junior

Este repositório contém um projeto front-end desenvolvido como tarefa na IN Junior, com foco na criação de **componentes React** e na estruturação de uma interface no estilo feed de rede social.

## Objetivo

Praticar os conceitos fundamentais de React com TypeScript, como:

- Criação e composição de componentes funcionais
- Passagem de props entre componentes
- Estilização com CSS Modules
- Estruturação de layout com componentes reutilizáveis
- Configuração de projeto com Vite + React + TypeScript

## 📋 Sobre o projeto

O **IN FEED** é uma interface de feed de publicações inspirada em redes sociais profissionais, composta por:

- **Header** — barra superior de navegação da aplicação
- **Card Pessoal** — card fixo com as informações do usuário logado (nome e foto)
- **Card de Post** — cards de publicações de outros usuários, exibindo nome, cargo, tempo de publicação, conteúdo do post, e a foto do autor e do usuário logado

## ✨ Funcionalidades

- Renderização de múltiplos posts no feed a partir de dados estáticos
- Exibição de informações do usuário logado em todos os cards de post
- Layout componentizado e estilizado com CSS Modules

## 📁 Estrutura do projeto

```text
Tarefa_IN_FEED/
├── src/
│   ├── App.tsx                    # Componente raiz (Header + Feed)
│   ├── main.tsx                   # Ponto de entrada da aplicação
│   ├── index.css                  # Estilos globais
│   ├── assets/                    # Fotos de perfil dos usuários
│   └── componentes/
│       ├── header/                # Componente de cabeçalho
│       ├── feed/                  # Componente de feed (lista de posts)
│       ├── cardPessoal/           # Card com info do usuário logado
│       └── cardComent/            # Card de publicação
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcosgomes-dev/Tarefa_IN_FEED.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Tarefa_IN_FEED
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse no navegador: `http://localhost:5173`

## 🛠️ Tecnologias utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **CSS Modules**

## Autor

Projeto desenvolvido como tarefa de componentes React na IN Junior.
