# Banco de Dados - Mongo

A tecnologia escolhida para ser o banco de dados do projeto foi o MongoDB, por fugir de uma base relacional e ser uma experiência nova com banco de dados.

## Rodando localmente

### Pré-requisitos:

- Precisa ter clonado o projeto em sua máquina local.

### Passo a Passo Geral

Inicie o banco de dados:

```bash
  mongod --port 27018 --dbpath C:\projetoIntegrador\mongo --auth
```

### Executar no Windows

Se estiver tentando rodar em uma máquina com Windows instalado, basta rodar o comando a seguir:

```bash
  .\RunBaseMongo.bat
```

O bat que está na raiz do projeto ficará encarregado de executar a aplicação.

## Coleções

- Usuário
- Loja
- Promoção
- Denúncia
- Comentário
