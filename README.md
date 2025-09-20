# TodoApp Chapetta 📝

Uma aplicação de lista de tarefas moderna e responsiva, construída com **React**, **Vite**, **TypeScript** e **TailwindCSS**, com suporte a **tema claro e escuro**, filtros avançados e funcionalidades intuitivas para gerenciamento de tarefas.

🌐 [Veja o projeto online](https://todoappchapetta.netlify.app/)

---

## 🚀 Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas individualmente.
- Limpar todas as tarefas concluídas com um clique.
- Filtro para visualizar:
  - Todas as tarefas
  - Tarefas ativas
  - Tarefas concluídas
- Contador de tarefas exibindo o total.
- Alternar entre **modo escuro** e **modo claro**.
- Layout **responsivo**, funcionando perfeitamente em dispositivos móveis e desktop.

---

## 🎬 Demonstração

### Adicionar e completar tarefas
![Adicionar e completar tarefas](./assets/gifs/add-complete-todo.gif)

### Alternar tema (dark/light)
![Alternar tema](./assets/gifs/toggle-theme.gif)

### Filtrar tarefas
![Filtrar tarefas](./assets/gifs/filter-tasks.gif)

### Remover tarefas e limpar completadas
![Remover tarefas](./assets/gifs/remove-clear.gif)

🌐 [Clique aqui para testar a aplicação online](https://todoappchapetta.netlify.app/)

---

## 🛠 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-%23E33332.svg?style=for-the-badge&logo=testing-library&logoColor=white)

---

## 📂 Estrutura do Projeto

todo-app/
├─ public/
│ ├─ images/ # Imagens de fundo e ícones
│ └─ fonts/ # Fonte personalizada Josefin Sans
├─ src/
│ ├─ assets/
│ │ ├─ gifs/ # GIFs de demonstração
│ │ └─ icons/ # Ícones (check, cross, sol, lua)
│ ├─ components/ # Componentes React
│ │ ├─ TodoContainer.tsx
│ │ ├─ TodoForm.tsx
│ │ ├─ TodoHeader.tsx
│ │ └─ TodoList.tsx
│ ├─ contexts/ # Contexto de tema (Dark/Light)
│ ├─ hooks/ # Hook useTodo
│ ├─ styles/ # CSS global
│ └─ App.tsx
├─ index.tsx # Entry point
└─ vite.config.ts


---

## 💻 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/todoapp-chapetta.git
cd todoapp-chapetta

    Instale as dependências:

npm install
# ou
yarn

    Rode a aplicação:

npm run dev
# ou
yarn dev

    Abra no navegador:

http://localhost:5173

📌 Scripts Disponíveis

    dev — Executa a aplicação em modo de desenvolvimento.

    build — Gera a versão de produção da aplicação.

    preview — Visualiza a versão de produção localmente.

    test — Executa os testes com React Testing Library.

⚡ Considerações

    A aplicação utiliza hooks personalizados para gerenciamento de tarefas (useTodo).

    Suporte a tema dinâmico utilizando Context API.

    Estilização feita com TailwindCSS e fontes personalizadas.

    Totalmente responsiva e otimizada para desktop e mobile.

    Deploy simples e rápido via Netlify.

✍️ Autor

Yan Chapetta

    GitHub: https://github.com/chapetta

LinkedIn: https://www.linkedin.com/in/yan-chapetta/
