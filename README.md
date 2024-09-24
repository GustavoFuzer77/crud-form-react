# CRUD com React

Este projeto consiste em uma aplicação simples de CRUD (Criar, Ler, Atualizar e Deletar) desenvolvida com as seguintes tecnologias:

- **React**
- **Material UI**
- **React Hook Form**
- **Context API** (eu recriei a biblioteca **zustend**, portanto não estarei utilizando)
- **Zod**
- **Axios**
- **json-server**

## Descrição do Projeto

A aplicação permite aos usuários gerenciar um cadastro simples, incluindo campos para Nome, CPF, Email, Telefone e Endereço. A interface é construída com componentes do Material UI, proporcionando um design moderno e responsivo.

### Funcionalidades

- **Cadastro de Usuários**: Um formulário para adicionar novos usuários, utilizando o React Hook Form para gerenciar os dados do formulário.
- **Validação de Formulários**: Validação de campos utilizando a biblioteca Zod, garantindo que os dados inseridos estejam corretos antes do envio.
- **Listagem de Usuários**: Uma página que exibe todos os registros cadastrados com opções para editar ou excluir cada entrada.
- **Edição e Exclusão**: Funcionalidades que permitem a edição e exclusão de registros diretamente da lista exibida.
- **Gerenciamento de Estado**: Utilização da Context API para gerenciar o estado global da aplicação, facilitando o compartilhamento de dados entre os componentes.
- **Comunicação com a API Mock**: A aplicação se comunica com uma API mock, simulando operações de CRUD através do `json-server` ou outra ferramenta semelhante.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material UI**: Framework de design para React que fornece componentes prontos para uso.
- **React Hook Form**: Biblioteca para gerenciar formulários em React com facilidade.
- **Context API**: API do React para gerenciamento de estado global.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **json-server**: Ferramenta para simular uma API RESTful de forma rápida e fácil.

## Instalação

Para executar este projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   
4. Instale as dependências:
   ```bash
   npm install
   
6. Inicie o servidor da API mock:
   ```bash
   json-server --watch db.json
   
8. Inicie a aplicação:
   ```bash
   npm start
   
