# 🅿️ Sistema de controle de estacionamento condominial

Um painel administrativo que permite gerenciar de forma simples e eficiente os veículos cadastrados, as vagas disponíveis e a atribuição de vagas para cada veículo.

## 🛠️ Tecnologias Utilizadas

### Front-end
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Back-end
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Web API](https://img.shields.io/badge/Web_API-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?logo=microsoftsqlserver&logoColor=white)

### API Utilizada

👉 [API Car Parking](https://github.com/FelipeCostaq/car-parking-api)

### Outros
- ![Git](https://img.shields.io/badge/versionamento-Git-%23F05033?logo=git&logoColor=white)

## 💼 O que você encontrará no painel

- **Gerenciamento de Veículos** — Crie, edite, delete e busque por veículos.
- **Gerenciamento de Vagas** — Crie, edite, delete e busque por vagas.
- **Gerenciamento de Atribuições** — Atribua carros para vagas, edite, delete e busque por atribuições.

## 📸

<img height="425" width="800" src="https://github.com/FelipeCostaq/car-parking-app/blob/main/img-painel-admin.png?raw=true" alt="Imagem do Painel">
<img height="425" width="800" src="https://github.com/FelipeCostaq/car-parking-api/blob/main/img-painel-admin-table.png?raw=true" alt="Imagem do Painel Tabela">

## 📋 Pré-requisitos para rodar o projeto

Antes de começar, verifique se você tem os seguintes itens instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes
- [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) instalado e em execução
- [SDK do .NET 8](https://dotnet.microsoft.com/en-us/download) para rodar a API
- [Git](https://git-scm.com/) para clonar os repositórios

## 🚀 Como rodar o projeto

Este projeto é dividido em **Front-end (React)** e **Back-end (.NET + SQL Server)**.  
Siga os passos abaixo para rodar a aplicação completa.

### 🔹 Clonar o repositório - Front-end

# Clone o front-end
git clone https://github.com/FelipeCostaq/car-parking-app.git
cd car-parking-app

### 🔹 Clonar os repositórios
npm install
ou
yarn install

### 🔹 Instale as dependências
npm install
ou
yarn install

### 🔹 Inicie a aplicação
npm start
ou
yarn start

<hr>

### 🔹 Clonar o repositório - Back-end

# Clone o back-end
git clone https://github.com/FelipeCostaq/car-parking-api.git
cd car-parking-api

### 🔹 Configure o banco de dados

Verifique se o SQL Server está instalado e em execução.

O projeto está configurado para acessar localhost.

Caso sua instância seja diferente, edite a connection string no arquivo appsettings.json.

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=CarParkingDB;User Id=seuUsuario;Password=suaSenha;Trusted_Connection=False;TrustServerCertificate=True;"
}

### 🔹 Rode a API
dotnet run

⚠️ Importante sobre CORS:
A API está configurada para aceitar requisições apenas da origem **http://localhost:5173**  
Se o seu front-end rodar em outra porta (ex.: `http://localhost:3000`), é necessário alterar a configuração de CORS no arquivo `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowReact",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // altere aqui se necessário
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

