
# API - PromoCão

API feita em NodeJS, com controle de acesso privado para a aplicação administradora, e acesso público para a aplicação de usuário comum.## Rodando localmente

### Pré-requisitos:

- O banco Mongo precisa estar rodando;
- Precisa ter clonado o projeto em sua máquina local.

### Passo a Passo Geral

Entre no diretório do projeto:

```bash
  cd api
```

Instale as dependências:

```bash
  npm install
```

Inicie a aplicação:

```bash
  npm run dev
```

### Executar no Windows

Primeiro instale as dependências:

```bash
  npm install
```

Se estiver tentando rodar em uma máquina com Windows instalado, basta rodar o comando a seguir:

```bash
  .\RunAPI.bat
```

O bat que está na raiz do projeto ficará encarregado de executar a aplicação.

## Endpoints

### Rotas Privadas

#### Comentários

- GET: /comentarios - Listar todos os comentários
- POST: /comentarios - Incluir comentário
- PUT: /comentarios - Alterar comentário
- DELETE: /comentarios - Excluir comentário
- GET: /comentarios/:id - Obter comentário pelo id
- GET: /comentarios/filtro/:filtro - Obter comentário por filtro

#### Denúncias

- GET: /denuncias - Listar todas as denúncias
- POST: /denuncias - Incluir denúncia
- PUT: /denuncias - Alterar denúncia
- DELETE: /denuncias - Excluir denúncia
- GET: /denuncias/:id - Obter denúncia pelo id
- GET: /denuncias/filtro/:filtro - Obter denúncia por filtro

#### Lojas

- GET: /lojas - Listar todas as lojas
- POST: /lojas - Incluir loja
- PUT: /lojas - Alterar loja
- DELETE: /lojas - Excluir loja
- GET: /lojas/:id - Obter loja pelo id
- GET: /lojas/filtro/:filtro - Obter loja por filtro

#### Promoções

- GET: /promocaos - Listar todas as promoções
- POST: /promocaos - Incluir promoção
- PUT: /promocaos - Alterar promoção
- DELETE: /promocaos - Excluir promoção
- GET: /promocaos/:id - Obter promoção pelo id
- GET: /promocaos/filtro/:filtro - Obter promoções por filtro
- GET: /promocaos/loja/:filtro - Obter promoções por id de loja
- GET: /promocaos/status/:filtro - Obter promoções por status
- GET: /promocaos/categoria/:filtro - Obter promoções por categoria

#### Usuários

- GET: /usuarios - Listar todos os usuários
- POST: /usuarios - Incluir usuário
- PUT: /usuarios - Alterar usuário
- DELETE: /usuarios - Excluir usuário
- GET: /usuarios/:id - Obter usuário pelo id
- GET: /usuarios/filtro/:filtro - Obter usuário por filtro

### Rotas Públicas

#### Denúncias

- POST: /denunciasPublic - Incluir denúncia

#### Login

- POST: /login - Realiza o login
- POST: /logout - Realiza o logout

#### Lojas

- GET: /lojasPublic - Listar lojas

#### Promoções

- GET: /promocaosPublic - Listar todas as promoções
- POST: /promocaosPublic - Incluir promoção
- GET: /promocaosPublic/filtro/:filtro - Obter promoções por filtro
- GET: /promocaosPublic/loja/:filtro - Obter promoções por id de loja
- GET: /promocaosPublic/status/:filtro - Obter promoções por status
- GET: /promocaosPublic/categoria/:filtro - Obter promoções por categoria
