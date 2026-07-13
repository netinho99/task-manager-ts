#  Task Manager API - Node.js e TypeScript

API REST para gerenciamento de tarefas desenvolvida com **Node.js** e **TypeScript**.

O objetivo deste projeto é praticar desenvolvimento backend, criação de rotas HTTP, tipagem estática e organização de código utilizando boas práticas.

---

##  Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- TSX (execução do TypeScript em desenvolvimento)
- npm

---

##  Estrutura do projeto

```
task-manager-ts/
│
├── src/
│   ├── index.ts          # Inicialização da API
│   │
│   ├── models/
│   │   └── Task.ts       # Interface da tarefa
│   │
│   └── routes/
│       └── tasks.ts      # Rotas da API
│
├── package.json
├── tsconfig.json
└── README.md
```

---

##  Instalação

Clone o projeto:

```bash
git clone https://github.com/netinho99/task-manager-ts.git
```

Entre na pasta:

```bash
cd task-manager-ts
```

Instale as dependências:

```bash
npm install
```

---

##  Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

A API será iniciada em:

```
http://localhost:3000
```

---

#  Endpoints

## Listar tarefas

```
GET /tasks
```

Resposta:

```json
[
  {
    "id": 1,
    "title": "Aprender TypeScript",
    "completed": false
  }
]
```

---

## Criar tarefa

```
POST /tasks
```

Body:

```json
{
  "title": "Criar projeto para o GitHub"
}
```

Resposta:

```json
{
  "id": 2,
  "title": "Criar projeto para o GitHub",
  "completed": false
}
```

---

## Remover tarefa

```
DELETE /tasks/:id
```

Exemplo:

```
DELETE /tasks/1
```

---

##  Próximas melhorias

- [ ] Banco de dados SQLite/PostgreSQL
- [ ] Autenticação com JWT
- [ ] Validação de dados
- [ ] Arquitetura MVC
- [ ] Documentação com Swagger
- [ ] Deploy em ambiente cloud

---

##  Autor

**Netinho99**

Projeto desenvolvido para estudos de Backend com Node.js e TypeScript.
