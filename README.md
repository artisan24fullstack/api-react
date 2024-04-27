## React Packages Used

> Install npm i react-router-dom

- https://react-icons.github.io/react-icons/

## Getting Started

To get started with the project, follow these steps:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory of the project and add your API key:
- https://vitejs.dev/guide/env-and-mode

   ```plaintext
   VITE_API_KEY=api-key

   console.log(import.meta.env.VITE_API_KEY) // "api-key"

   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost` to view the application.

### Step-by-step template for setting up
my-project/

```
my-project/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── styles/
│   │   │   ├── main.scss
│   │   │   └── variables.scss
│   ├── components/
│   │   ├── smallcomponents.jsx
│   ├── layout/
│   │   ├── globalsections.jsx
│   ├── pages/
│   │   ├── NamePage.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```


```
│   ├── App.jsx
```

> App Folder = Routes 
> => (Later separate Routes Folder)
- This folder consists of all routes of the application. 
- It consists of private, protected, and all types of routes. 
- Here we can even call our sub-route.

> (1) Install npm i react-router-dom
- (2) and use with example https://reactrouter.com/en/main/router-components/browser-router

```
│   ├── App.jsx 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/url/:id' element={<namePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
```


```
│   ├── components/
```
> components Folder:

- A Component is one of the core building blocks of React. 

- They have the same purpose as JavaScript functions and return HTML. 
- Components make the task of building UI much easier. 
- A UI is broken down into multiple individual pieces called components. 
- You can work on components independently and then merge them all into a parent component which will be your final UI. 

```
│   ├── layout/
```
> layout Folder
- As the name says, it contains layouts available to the whole project like header, footer, etc. 
- We can store the header, footer, or sidebar code here and call it.


```
│   ├── pages/
│   │   ├── NamePage.jsx

```

> pages Folder
- > Naming conventions (NamePage.jsx)

- The files in the pages folder indicate the route of the react application. 
- Each file in this folder contains its route. 
- A page can contain its sub folder. 
- Each page has its state and is usually used to call an sync operation. 
- It usually consists of various components grouped.
