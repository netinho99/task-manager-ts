Task Manager API - Node.js, TypeScript e SQLite
API REST para gerenciamento de tarefas desenvolvida com Node.js, TypeScript, Express e SQLite.
Este projeto foi criado com o objetivo de praticar desenvolvimento backend, aplicando conceitos de APIs REST, organização de código, tipagem estática com TypeScript, integração com banco de dados SQLite e versionamento utilizando Git e GitHub.
Tecnologias utilizadas
Node.js
TypeScript
Express.js
SQLite
better-sqlite3
TSX
npm
Git
GitHub
Estrutura do projeto
task-manager-ts/
│
├── src/
│   ├── database/
│   │   └── database.ts      # Configuração do banco SQLite
│   │
│   ├── models/
│   │   └── Task.ts          # Interface Task
│   │
│   ├── routes/
│   │   └── tasks.ts         # Rotas da API
│   │
│   └── index.ts             # Inicialização do servidor
│
├── tasks.db                 # Banco de dados SQLite
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
Instalação
Clone o repositório:
git clone https://github.com/netinho99/task-manager-ts.git
Entre na pasta do projeto:
cd task-manager-ts
Instale as dependências:
npm install
Executando a aplicação
Modo desenvolvimento:
npm run dev
A API será iniciada em:
http://localhost:3000
Endpoints disponíveis
Listar todas as tarefas
GET /tasks
Resposta:
[
  {
    "id": 1,
    "title": "Minha primeira tarefa",
    "completed": false
  }
]
Criar uma tarefa
POST /tasks
Body:
{
  "title": "Estudar Node.js"
}
Resposta:
{
  "id": 2,
  "title": "Estudar Node.js",
  "completed": false
}
Atualizar uma tarefa
PUT /tasks/:id
Body:
{
  "title": "Estudar TypeScript",
  "completed": true
}
Resposta:
{
  "id": 1,
  "title": "Estudar TypeScript",
  "completed": true
}
Remover uma tarefa
DELETE /tasks/:id
Exemplo:
DELETE /tasks/1
Resposta:
{
  "message": "Tarefa removida com sucesso."
}
Funcionalidades
Listagem de tarefas
Cadastro de tarefas
Atualização de tarefas
Exclusão de tarefas
Persistência dos dados utilizando SQLite
API REST desenvolvida com Express
Tipagem estática utilizando TypeScript
Próximas melhorias
Implementar Controllers e Services
Validação de dados com Zod
Tratamento centralizado de erros
Documentação da API com Swagger
Testes automatizados
Autenticação com JWT
Docker
Deploy em ambiente cloud
Autor
Netinho99
Projeto desenvolvido para estudos de desenvolvimento backend utilizando Node.js, TypeScript, Express e SQLite, com foco na prática de APIs REST, organização de código e integração com banco de dados.
