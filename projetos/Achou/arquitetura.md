
# 📈 **Arquitetura da Plataforma**

**Achou!** é a plataforma que conecta empresas e profissionais de forma eficiente e segura. Com uma arquitetura bem definida e um roteiro de desenvolvimento claro, estamos prontos para entregar uma solução de qualidade para nossos usuários. 🚀

---

## 🛠 **Padrão MVC (Model-View-Controller)**

A arquitetura **MVC** é crucial para organizar nossa aplicação, permitindo um desenvolvimento escalável e manutenção simplificada. Vamos explorar cada componente:

### **Model**
- **Função**: Gerenciar dados, lógica de negócios e regras de acesso.
- **Componentes**:
  - **Banco de Dados**: Estrutura de tabelas e relacionamentos.
  - **Entidades**: Representações dos dados (`Empresa`, `Profissional`, `Vaga`).
  - **Repositórios**: Acesso a dados, operações CRUD.

### **View**
- **Função**: Apresentação dos dados e interação com o usuário.
- **Componentes**:
  - **Front-end**: Páginas e componentes (HTML, CSS, JavaScript, frameworks como React/Vue).
  - **Templates**: Renderização dinâmica de dados.
  - **UI/UX**: Design e experiência do usuário.

### **Controller**
- **Função**: Intermediação entre Model e View, controle do fluxo da aplicação.
- **Componentes**:
  - **Controladores**: Lidam com requisições HTTP, chamam métodos do Model e definem a View.
  - **Roteadores**: Mapeamento de URLs para ações dos controladores.
  - **Serviços**: Lógica de negócios complementar.

---

## 🌿 **Fluxo de Trabalho com Git Flow**

O **Git Flow** será adotado para garantir um fluxo de trabalho organizado e eficaz. As principais branches e suas funções são:

### **Branches Principais**
- **`main`**: Código de produção estável.
- **`develop`**: Desenvolvimento ativo de novas funcionalidades.

### **Branches de Suporte**
- **Feature Branches** (`feature/nome-da-funcionalidade`): Novas funcionalidades, originadas de `develop`.
- **Release Branches** (`release/versão`): Preparação para produção, originadas de `develop`.
- **Hotfix Branches** (`hotfix/nome-do-fix`): Correções urgentes em produção, originadas de `main`.

---

## 📝 **Sprints e Atividades - Projeto Achou!**

---

### 🏁 **Sprint 1 (Semana 1-2)**

### **Objetivo**: Estabelecer a base para o cadastro de empresas e profissionais, além de iniciar o processo de triagem de currículos.

### **Cadastro de Empresa (US01)**
- **Desenvolvimento**:
  - Implementar formulário de cadastro.
  - Validação de dados.
  - Envio de e-mail de confirmação.
- **Teste**:
  - Verificar a validação de campos obrigatórios.
  - Confirmar o envio de e-mail.
  - Integrar com a base de dados.
- **Implementação**:
  - Deploy da funcionalidade de cadastro.
  - Painel de administração para gerenciamento de empresas.

### **Cadastro de Profissional (US03)**
- **Desenvolvimento**:
  - Criar formulário de cadastro com campos para informações pessoais.
  - Implementar upload de currículo.
- **Teste**:
  - Testar upload de arquivos e validação de formatos permitidos.
  - Garantir armazenamento seguro.
- **Implementação**:
  - Deploy do sistema de cadastro de profissionais com painel de gerenciamento.

### **Processo de Seleção - Triagem de Currículos (US04)**
- **Desenvolvimento**:
  - Criar interface para visualização e avaliação de currículos.
- **Teste**:
  - Garantir a correta exibição de currículos.
  - Validar funcionalidade de avaliação.
- **Implementação**:
  - Deploy da interface de triagem e sistema de notas.

---

### 🌱 **Sprint 2 (Semana 3-4)**

### **Objetivo**: Completar as análises comportamentais e psicométricas, além de iniciar a busca por profissionais.

### **Análise Comportamental e Psicométrica (US05)**
- **Desenvolvimento**:
  - Implementar envio de testes.
  - Armazenamento e análise de resultados.
- **Teste**:
  - Validar a funcionalidade de envio de testes.
  - Confirmar a precisão dos resultados.
- **Implementação**:
  - Deploy dos testes e painel de análise para administradores.

### **Entrevistas (US06)**
- **Desenvolvimento**:
  - Criar sistema de agendamento e avaliação de entrevistas.
- **Teste**:
  - Verificar a precisão do agendamento.
  - Validar funcionalidade de avaliação.
- **Implementação**:
  - Deploy do sistema de agendamento de entrevistas e integração com o perfil dos candidatos.

### **Busca por Profissionais (US07)**
- **Desenvolvimento**:
  - Implementar filtros de busca e exibição de resultados.
- **Teste**:
  - Testar a precisão dos filtros.
  - Verificar a usabilidade da interface de busca.
- **Implementação**:
  - Deploy do sistema de busca e integração com a base de dados de profissionais.

---

### 🚀 **Sprint 3 (Semana 5-6)**

### **Objetivo**: Implementar sugestões de profissionais, sistema de notificações e comunicação interna.

### **Sugestões de Profissionais (US08)**
- **Desenvolvimento**:
  - Criar algoritmo de correspondência.
  - Implementar sistema de sugestões.
- **Teste**:
  - Validar a precisão das sugestões.
  - Verificar o desempenho do algoritmo.
- **Implementação**:
  - Deploy do sistema de sugestões com notificações personalizadas.

### **Sistema de Notificações (US09)**
- **Desenvolvimento**:
  - Implementar sistema de notificações por e-mail e in-app.
- **Teste**:
  - Verificar a entrega de notificações.
  - Configurar preferências de usuários.
- **Implementação**:
  - Deploy do sistema de notificações com opções de personalização.

### **Mensagens e Chat (US10)**
- **Desenvolvimento**:
  - Criar interface de chat.
  - Implementar sistema de histórico de mensagens.
- **Teste**:
  - Testar envio e recebimento de mensagens.
- **Implementação**:
  - Deploy do sistema de comunicação interna com segurança de dados.

---

### 📊 **Sprint 4 (Semana 7-8)**

### **Objetivo**: Implementar relatórios de desempenho, análises de eficiência e finalizar o sistema para o lançamento.

### **Relatórios de Desempenho (US11)**
- **Desenvolvimento**:
  - Criar sistema de geração de relatórios e gráficos.
- **Teste**:
  - Validar a precisão dos dados.
  - Confirmar clareza dos relatórios.
- **Implementação**:
  - Deploy do sistema de relatórios com exportação em PDF.

### **Análises de Eficiência (US12)**
- **Desenvolvimento**:
  - Implementar dashboard com KPIs e análise de dados.
- **Teste**:
  - Verificar a precisão das análises.
  - Validar visualização dos dados.
- **Implementação**:
  - Deploy do dashboard de eficiência e integração com outros módulos.

---

## 🛠 **Atividades Complementares**

### **Documentação**
- **Técnica**: Para desenvolvedores.
- **Guia de Uso**: Para empresas e profissionais.

### **Testes e Qualidade**
- **Testes de Carga e Segurança**: Avaliação do sistema sob diferentes condições.
- **Testes de Usabilidade**: Feedback dos usuários e melhorias.

### **Marketing e Lançamento**
- **Materiais de Marketing**: Estratégias e conteúdo para divulgação.
- **Campanhas Promocionais**: Parcerias e promoções para lançamento.

### **Suporte e Feedback**
- **Canais de Suporte**: Estabelecimento de canais para auxílio aos usuários.
- **Coleta de Feedback**: Análise contínua para melhorias do sistema.
---

## 🛠 **Detalhes Técnicos e Ferramentas**

### **Back-end**
- **Linguagens**: Node.js, a definir outras
- **Frameworks**: Express.js, a definir outras
- **Banco de Dados**: PostgreSQL, MongoDB, MySQL.
- **Autenticação**: JWT, OAuth.

### **Front-end**
- **Linguagens**: JavaScript, TypeScript.
- **Frameworks**: React, Vue.js, Angular.
- **Estilização**: CSS, Sass, Bootstrap, Material UI.

### **DevOps**
- **CI/CD**: GitHub Actions, Jenkins, GitLab CI.
- **Deploy**: a definir
- **Monitoramento**: a definir

### **Comunicação e Gerenciamento**
- **Gestão de Projetos**: Jira, Trello.
- **Comunicação**: Slack, Microsoft Teams.
- **Documentação**: Confluence, Notion, GitHub Wiki.

---

## 📁 Estrutura do Projeto

| Pasta       | Descrição                                                                                     | Arquivos/ Diretórios                             |
|-------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------|
| `app/`      | Contém a lógica da aplicação, incluindo controladores, modelos e visualizações.              | `controllers/`, `models/`, `views/`, `__init__.py` |
| `config/`   | Arquivos de configuração da aplicação, como banco de dados e configurações gerais.            | `database.py`, `settings.py`                     |
| `tests/`    | Testes unitários e de integração para garantir a qualidade do código.                         | `test_models.py`, `test_views.py`, `test_controllers.py` |
| `manage.py` | Script para gerenciamento da aplicação, como execução de servidores e migrações de banco de dados. | -                                                |
| `README.md` | Este arquivo de documentação.                                                                 | -                                                |

### **app/**

| Diretório         | Descrição                                                                                   | Arquivos                                      |
|-------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------|
| `controllers/`    | Controladores que gerenciam a lógica de negócios e interagem com os modelos e visualizações. | `empresa_controller.py`, `profissional_controller.py` |
| `models/`         | Modelos que definem a estrutura dos dados e as interações com o banco de dados.              | `empresa.py`, `profissional.py`               |
| `views/`          | Contém os templates e arquivos estáticos usados para renderizar a interface do usuário.     | `templates/`, `static/`                       |
| `templates/`      | Arquivos HTML para as páginas da web.                                                        | `empresa/`, `profissional/`                   |
| `static/`         | Arquivos estáticos como CSS e JavaScript.                                                    | `css/`, `js/`                                 |


---

### **Interações entre Componentes**

- **Views ↔ Controllers**: A View faz solicitações aos Controladores, que processam essas solicitações e interagem com os Serviços.
- **Controllers ↔ Services**: Os Controladores invocam os Serviços para processar a lógica de negócios e obter ou manipular dados.
- **Services ↔ Models**: Os Serviços utilizam os Modelos para acessar e manipular dados. 
- **Models ↔ Repositories**: Os Modelos solicitam aos Repositórios a persistência e recuperação de dados no banco de dados.
- **Repositories ↔ Database**: Os Repositórios realizam operações CRUD no Banco de Dados.
- **Services ↔ External Services**: Os Serviços podem se integrar com APIs e serviços externos para funcionalidades adicionais.
- **Controllers ↔ Authentication and Authorization**: Os Controladores utilizam o sistema de Autenticação e Autorização para verificar permissões e gerenciar o acesso dos usuários.
- **Controllers ↔ Notifications**: Os Controladores solicitam o envio de notificações através do sistema de Notificações.

---

### **Arquitetura MVC Simplificada**

| **Camada**        | **Componente**            | **Descrição**                                                                 | **Responsabilidades**                                                                                       |
|-------------------|---------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Model**         | **Models**                | **Modelos**: Representam e manipulam os dados da aplicação.                    | Definem a estrutura dos dados e interagem com o banco de dados. (ex. `Company`, `Professional`).           |
| **View**          | **Views**                 | **Views**: Interfaces e templates de usuário.                                  | Exibem dados e formulários para interação com o usuário (ex. páginas de cadastro e busca).                  |
| **Controller**    | **Controllers**           | **Controllers**: Coordenam a interação entre a View e o Model.                  | Processam as solicitações do usuário, interagem com os Models e atualizam as Views (ex. `CompanyController`).|


``
achou/
│
├── models/
│   ├── company.js
│   ├── professional.js
│   └── ... (outros modelos)
│
├── views/
│   ├── company/
│   │   ├── list.ejs
│   │   ├── details.ejs
│   │   └── ... (outras views de empresa)
│   ├── professional/
│   │   ├── list.ejs
│   │   ├── details.ejs
│   │   └── ... (outras views de profissional)
│   └── ... (outras views)
│
├── controllers/
│   ├── companyController.js
│   ├── professionalController.js
│   └── ... (outros controladores)
│
├── routes/
│   ├── companyRoutes.js
│   ├── professionalRoutes.js
│   └── ... (outras rotas)
│
├── config/
│   └── db.js                # Configuração do banco de dados
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── app.js                   # Ponto de entrada da aplicação
└── package.json             # Gerenciador de pacotes e dependências


### **Descrição dos Componentes**

1. **Models**
   - **Responsabilidade**: Representar e manipular dados.
   - **Localização**: `models/`
   - **Exemplo**: `company.js` define o esquema e métodos para a entidade Empresa.

2. **Views**
   - **Responsabilidade**: Exibir dados e formulários para interação com o usuário.
   - **Localização**: `views/`
   - **Exemplo**: `list.ejs` para listar empresas.

3. **Controllers**
   - **Responsabilidade**: Coordenar a interação entre a View e o Model.
   - **Localização**: `controllers/`
   - **Exemplo**: `companyController.js` lida com a lógica para exibir e manipular empresas.

4. **Routes**
   - **Responsabilidade**: Definir as rotas da aplicação e associá-las aos Controladores.
   - **Localização**: `routes/`
   - **Exemplo**: `companyRoutes.js` define rotas para operações relacionadas a empresas.

5. **Config**
   - **Responsabilidade**: Configurar a aplicação, como conexão com o banco de dados.
   - **Localização**: `config/`
   - **Exemplo**: `db.js` configura a conexão com o banco de dados.

6. **Public**
   - **Responsabilidade**: Arquivos estáticos como CSS, JS e imagens.
   - **Localização**: `public/`
   - **Exemplo**: `css/styles.css` para estilos da aplicação.

7. **App.js**
   - **Responsabilidade**: Ponto de entrada da aplicação que configura o servidor e as rotas.
   - **Localização**: Raiz do projeto.

### **Fluxo de Dados**

1. **Usuário** acessa uma página da aplicação.
2. **View** exibe o formulário ou página solicitada.
3. **Controller** recebe a solicitação do usuário e interage com o **Model** para obter ou manipular dados.
4. **Model** executa a lógica de acesso a dados e retorna informações ao **Controller**.
5. **Controller** atualiza a **View** com os dados processados.







