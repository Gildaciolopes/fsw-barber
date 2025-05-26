<div>

# ✂️ Saas de Agendamentos para Barbearias - FSW Barber

Meu objetivo é criar uma aplicação web que permita agendar serviços de várias barbearias de forma simples e eficiente, facilitando a vida dos clientes e dos barbeiros. O sistema permite que os usuários encontrem barbearias, visualizem serviços disponíveis, façam reservas e gerenciem seus agendamentos diretamente do celular.

- O Website está disponível em `EM BREVE`.

<br/>

</div>

<div>

## 🚀 Funcionalidades

- 🔍 **Pesquisa de Barbearias**: Encontre rapidamente barbearias próximas e populares. <br/>
- 🗓️ **Agendamento de Serviços**: Reserve cortes de cabelo, barba e outros serviços com facilidade. <br/>
- 🔐 **Autenticação com Google**: Login seguro e rápido utilizando sua conta Google, integrado com **NextAuth**. <br/>
- 📅 **Gerenciamento de Agendamentos**: Visualize e cancele seus agendamentos diretamente na plataforma. <br/>
- 📱 **Interface Responsiva**: Design otimizado para dispositivos móveis, utilizando **Tailwind CSS**. <br/>
- 🛠️ **Sistema de Reservas**: Backend robusto com **Prisma** e **PostgreSQL** para gerenciar dados de usuários e reservas.

<br/>

## 🛠️ Tecnologias Utilizadas

- 💻 **Frontend**: TypeScript, React, Next.js, Tailwind CSS e Shadcn <br/>
- 🗄️ **Backend**: Node.js, Prisma, PostgreSQL <br/>
- 🔑 **Autenticação**: NextAuth <br/>
- 🛠️ **Bibliotecas Adicionais**: Lucide-react, Date-fns e Git Hooks

<br/>

## 🔧 Configuração do Projeto

1. 🔄 **Clone este repositório**:
   ```bash
   git clone https://github.com/gildaciolopes/fsw-barber.git
   ```
2. 📦 **Instale as dependências**:
   ```bash
   npm install
   ```
3. 🔑 **Configure as variáveis de ambiente**:

   - Crie um arquivo `.env.local` no diretório raiz do projeto com as seguintes variáveis:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

   - Substitua `your_google_client_id` e `your_google_client_secret` pelos valores fornecidos pelo Google.
   - Substitua `user`, `password`, `database_name` e `schema` pelos valores apropriados para o seu banco de dados.

4. 🔑 **Execute as migrações do banco de dados:**:

   ```bash
   npx prisma migrate dev
   ```

5. 🚀 **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   <br/>

   </div>

   Autor: [Gildácio Lopes](https://github.com/Gildaciolopes)

# Fluxograma de Desenvolvimento:

## Setup do projeto

- [x] Setup do banco de dados (postgreSQL)
- [x] Seeding do banco (colocar dados)
- [x] Introdução ao Next.js
- [x] Tailwind e Shadcn
- [x] Git Hooks

## Tela Inicial

- [x] Criar componente de header
- [x] Criar um Menu com Buscas Rápidas
- [x] Adicionar um banner
- [x] Mostrar agendamentos
- [x] Mostrar barbearias recomendadas e populares
- [x] Adicionar um footer
- [x] Adicionar um menu lateral

## Detalhes da Barbearia

- [x] Imagem da Barbearia, com botões de ações
- [x] Mostrar informações da Barbearia
- [x] Mostrar avaliações
- [x] Mostrar descrição da Barbearia
- [x] Mostrar serviços

## Login com Google

- [x] Tornar possivel o login com Google (NextAuth)
- [x] Adicionar um botão de login no menu lateral
