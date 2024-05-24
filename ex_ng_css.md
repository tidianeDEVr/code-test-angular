Coding exercise. The result should be a github project.

## install

Install nodejs 20 via [nvm](https://github.com/nvm-sh/nvm), vscode, git.

Install angular cli:
`npm install -g @angular/cli`

## code generation

Create an Angular project:
`ng new code-test-angular --style sass --ssr false`

Open the project with vscode.

Generate components

```
ng generate component header
ng generate component content
ng generate component menu
ng generate service my-service
```

Note: To be able to use `<app-header></app-header>` in `app.component.html` you have to add `HeaderComponent` to the `imports` array in `app.component.ts`

## task #1

```

 ┌─┬───────────────────────────────────────────────────────┬─┐
 │ ├───────────────────────────────────────────────────────┤ │
 │ │                                                       │ │
 │ │                header                                 │ │
 │ │                                                       │ │
 │ │                                                       │ │
 │ │                                                       │ │
 │ └───────────────────────────────────────────────────────┘ │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                   ┌──────────────────────┐                │
 │                   │                      │                │
 │                   │                      │                │
 │                   │                      │                │
 │                   │      content         │                │
 │                   │                      │                │
 │                   │                      │                │
 │                   │                      │                │
 │                   │                      │                │
 │                   └──────────────────────┘                │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │                                                           │
 │ ┌──────────────────────────────────────────────────────┐  │
 │ │┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼  menu ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼│  │
 └─┴──────────────────────────────────────────────────────┴──┘

```

The header must be visible when we scroll down the page. It must have a logo on the left and a logo on the right. (using css flexbox)

The content is centered in the middle of the page. (using css flexbox)

The menu must have round corners and is fixed in the bottom of the page.

Tip 1: To place `element 1` on the left and `element 2` on the right, we can add `flex:none` to element 1 and 2 and add a empty element in the middle with `flex: 1`.
The parent element needs to have `display: flex`

Tip 2: simmilar to tip 1, if the parent element has `flex-direction: column`, we can have stick something at the top and something at the bottom.

Tip 3: to center an element horizontally and vertically, we can use `display: flex; justify-content: center; align-items: center;` on the parent. The centered child need to be `flex` too.

## task #2

Let's create a array of football players in `my-service.ts`. We will use the new `signal` api.

```javascript
footballers = signal([
  { name: "Messi", club: "Barcelona" },
  { name: "Ronaldo", club: "Juventus" },
  { name: "Neymar", club: "PSG" },
]);
selectedFootballer = signal<{ name: string, club: string } | null>(null)
```

Display the list of the footballers in the `header` component using the new `@for` syntax.

When we click on the name of a  player in the `header`, we want the `selectedFootballer` to be updated and be displayed in the `<app-content>` component.
