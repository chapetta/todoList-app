# 📝 TodoApp  – React + TypeScript + Tailwind CSS + Testes (RTL)

Este projeto é uma aplicação **TodoApp** desenvolvida com **React**, **TypeScript**, **Tailwind CSS** e alguns **Testes (RTL)**, criada para praticar conceitos de **componentização**, **Context API**, **hooks customizados** e **estilização responsiva** e fazer **testes na aplicação**.

🌐 [Preview do Projeto](https://todoappchapetta.netlify.app/)


![Preview mobile](./assets/preview-mobile.gif)

---

## 🚀 Tecnologias Utilizadas

- **React + Vite** — Estrutura do projeto, componentização e reatividade.
- **TypeScript** — Tipagem estática e segurança no desenvolvimento.
- **Tailwind CSS** — Estilização utilitária, responsiva e produtiva.
- **Context API** — Gerenciamento global de tema (Dark/Light).
- **Hooks customizados** — Lógica de gerenciamento da lista de tarefas.
- **Testes (RTL)** - Aplicação de testes para testar funções e componentes.

---

## Estrutura do Projeto

```plaintext
todolist-app/
├─ src/
│  ├─ assets/
│  │  └─ images/
│  ├─ components/
│  │  ├─ TodoContainer/
│  │  │  ├─ index.tsx
│  │  │  └─ TodoContainer.test.tsx
│  │  ├─ TodoForm/
│  │  │  ├─ index.tsx
│  │  │  └─ TodoForm.test.tsx
│  │  ├─ TodoHeader/
│  │  │  ├─ index.tsx
│  │  │  └─ TodoHeader.test.tsx
│  │  └─ TodoList/
│  │     ├─ index.tsx
│  │     └─ TodoList.test.tsx
│  ├─ contexts/
│  │  ├─ ThemeProvider.tsx
│  │  ├─ ThemeContext.ts
│  │  └─ theme.ts
│  ├─ hooks/
│  │  └─ useTodo.ts
│  ├─ styles/
│  │  └─ globals.css
│  ├─ App.tsx
│  ├─ App.test.tsx
│  └─ main.tsx
└─ package.json
``` 

---

## ⚙️ Funcionalidades

- [x] **Adicionar Tarefas** — Insira novas tarefas no campo de input.
- [x] **Marcar como Concluída** — Clique no círculo ao lado da tarefa para marcar/desmarcar.
- [x] **Filtrar Tarefas** — Filtre entre `All`, `Active` e `Completed`.
- [x] **Remover Tarefas** — Exclua tarefas individualmente.
- [x] **Limpar Concluídas** — Remova todas as tarefas concluídas de uma vez.
- [x] **Tema Claro/Escuro** — Alterne entre os temas utilizando o botão no cabeçalho.
- [x] **Responsivo** — Layout adaptável para desktop e mobile.

---

## 🎨 Estilização

O projeto utiliza **Tailwind CSS** com um arquivo `globals.css` contendo:

- **Fonts**: Josefin Sans carregada localmente.
- **Variáveis de tema**: cores, gradientes e tipografia.
- **Customizações**: classes para background de tema (light/dark) e responsividade.

---

## 🧩 Componentes Principais

- **TodoContainer** — Estrutura principal da aplicação, aplica o tema.
- **TodoHeader** — Cabeçalho com título e botão de alternância de tema.
- **TodoForm** — Formulário para adicionar novas tarefas.
- **TodoList** — Renderiza a lista de tarefas, com botões de interação e filtros.

---

## 🧠 Hook Customizado – `useTodo`

Gerencia toda a lógica da aplicação:

- `addTodo` → Adiciona uma nova tarefa.
- `toggleTodoCompleted` → Marca/desmarca como concluída.
- `filteredTodos` → Filtra tarefas de acordo com o estado atual.
- `clearCompleted` → Remove todas as concluídas.
- `removeTodo` → Exclui uma tarefa específica.
- `filter` e `setFilter` → Controla o estado do filtro.

---

## 📥 Clone o repositório

```bash
git clone https://github.com/chapetta/todoapp-chapetta.git
```


📂 Acesse a pasta do projeto

```bash
cd todoapp-chapetta
```
⚙️ Instale as dependências

```bash
npm install
```
# ou
``
yarn
```


▶️ Rode o projeto

``` bash
npm run dev
``` 
# ou
```
yarn dev
``` 


🎯 Objetivo do Projeto

Este projeto foi criado com foco em aprendizado prático de:

    React com TypeScript

    Gerenciamento de estado com Context API e Hooks

    Estilização moderna com Tailwind CSS

    Boas práticas de componentização e clean code

📜 Licença

Este projeto é de uso livre para fins de estudo. Sinta-se à vontade para contribuir ou sugerir melhorias!
📬 Contato

Yan Chapetta

    GitHub: https://github.com/chapetta
    
## 📫 Contato


- Email: **cha.petta@hotmail.com**
- LinkedIn: **https://www.linkedin.com/in/yan-chapetta**
