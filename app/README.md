# PromoCão - Aplicação Administração

Essa é a parte do projeto que é responsável por ter a maior parte das funcionalidades devido o fato de ser o lugar para a administração do projeto.

## Rodando localmente

### Pré-requisitos:

- O banco Mongo precisa estar rodando;
- A API precisar estar rodando;
- Precisa ter clonado o projeto em sua máquina local.

### Passo a Passo Geral

Entre no diretório do projeto:

```bash
  cd app
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
  .\RunAppAdmin.bat
```

O bat que está na raiz do projeto ficará encarregado de executar a aplicação.

## Funcionalidades

- Gerenciamento de novos usuários administradores
- Seção para aprovação de promoções
- Seção para análise de denúncias
- Manutenção de promoções ativas
- Filtros por categorias de promoções
- Filtros de promoções por lojas específicas
