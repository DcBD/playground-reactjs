This project was created to make and master good implementations of popular react frameworks.

# React Playground
 - [ ] - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    - Sources:
      - [React Router Architecture that's Simple, Scalable and Protected](https://www.ryanjyost.com/react-routing)
      - [Best Scalable React App Structure 2021](https://codewithghazi.com/best-scalable-react-app-structure-2021/)
      - [TypeScript | Organizing and Storing Types and Interfaces](https://www.becomebetterprogrammer.com/typescript-organizing-and-storing-types-and-interfaces/)
        - Structure: `Hybrid`
      - [TypeScript + React: Why I don't use React.FC](https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/)
      - [React functional components: const vs function](https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9)
    - What was done:
      - scalable project architecture
        - `/library` - common things around the project
        - `/resources` - images etc
        - `/modules` - pages
      - scalable routes with nested routes
        - Routes: 
          - `/` - root
          - `/dashboard` - dashboard index page
          - `/dashboard/foo` - dashboard sub page