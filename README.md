# Next.js 14 + Redux Toolkit Todo List

This project is a simple Todo List application built with Next.js 14, Redux Toolkit, and TypeScript. It demonstrates how to set up and use Redux Toolkit for state management in a Next.js environment with TypeScript support.

## Features

- Add new todos
- Toggle todo completion status
- Remove todos
- Fully typed with TypeScript

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/bharathsn0812/nextjs-redux.git
   cd nextjs-redux-todo
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/store.ts`: Configures the Redux store using Redux Toolkit.
- `app/features/todos/todosSlice.ts`: Defines the todo list slice with actions for adding, toggling, and removing todos.
- `app/components/TodoList.tsx`: React component that displays the todo list and handles user interactions.
- `app/layout.tsx`: Root layout component that wraps the application with the Redux Provider.
- `app/page.tsx`: Main page component that renders the TodoList.

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)