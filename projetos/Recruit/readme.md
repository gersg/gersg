# Recruit Platform

## Descrição

Uma plataforma para listar e gerenciar vagas de emprego, candidatos e empresas.

## Tecnologias

- Back-end: Node.js, Express, PostgreSQL, Knex
- front ?

## API

### Obter todas as vagas

- **Método:** GET
- **Endpoint:** `/api/jobs`

### Criar uma nova vaga

- **Método:** POST
- **Endpoint:** `/api/jobs`
- **Corpo da solicitação:** `{ "title": "Título", "description": "Descrição", "location": "Localização", "category": "Categoria", "salary": 1000, "company_id": "ID da empresa" }`

### Obter todos os candidatos

- **Método:** GET
- **Endpoint:** `/api/candidates`

### Criar um novo candidato

- **Método:** POST
- **Endpoint:** `/api/candidates`
- **Corpo da solicitação:** `{ "name": "Nome", "email": "Email", "resume": "Link para currículo", "skills": ["Habilidade"] }`

### Obter todas as empresas

- **Método:** GET
- **Endpoint:** `/api/companies`

### Criar uma nova empresa

- **Método:** POST
- **Endpoint:** `/api/companies`
- **Corpo da solicitação:** `{ "name": "Nome", "email": "Email", "description": "Descrição", "location": "Localização" }`







