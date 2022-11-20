# PromoCão - Aplicação Usuário Final

Essa é a parte do projeto que é responsável por ter as funcionalidades que dizem respeito ao usuário comum, onde ele poderá principalmente visualizar promoções e sugerir novas.

## Rodando localmente

### Pré-requisitos:

- O banco Mongo precisa estar rodando;
- A API precisar estar rodando;
- Precisa ter clonado o projeto em sua máquina local.

### Passo a Passo Geral

Entre no diretório do projeto:

```bash
  cd app_user
```

Instale as dependências:

```bash
  npm install
```

Inicie a aplicação:

```bash
  npm start
```

### Executar no Windows

Primeiro instale as dependências:

```bash
  npm install
```

Se estiver tentando rodar em uma máquina com Windows instalado, basta rodar o comando a seguir:

```bash
  .\RunAppUser.bat
```

O bat que está na raiz do projeto ficará encarregado de executar a aplicação.

## Funcionalidades

- Visualização de promoções ativas
- Visualização de promoções por categorias
- Sugestão de promoções
- Denúncia de promoções
