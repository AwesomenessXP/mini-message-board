# mini-message-board
## What did I learn?
- to make a new express app: `npx express-generator --view=pug myApp`
- `"scripts"` in package.json can be used to run bash scripts with npm. Ex: `npm run server_start`
###### Routes: 
  - for the root of the route: `router.get('/', (req, res, next))`
  - use `Router()`
  - `router.get()` simply renders a view to the user
  - to render a view: `res.render('Title', content)`, where content can be an object and can send variables to the view
###### Views:
  - for interpolation: `#{variable}`
  - to inherit properties: `extends base`, where base is the file name
  - pug is rendered with ***buffered code*** where javascript is rendered. Ex: `h1 I am rendered`
  - unbuffered code is when javascript/pug is not rendered to the page
  - when you open a link to another view, send the full address starting at `/<root of the view>/<another page>`, same goes with sending forms
  - ex: what if you want to open `/admins/login` from `/admins`? You should do: `href="/admins/login"` to view that page
  - for pug.js, you can either use HTML syntax or inline javascript
###### App.js:
  - this is where we identify all of the routes (think of it like opening a road to the public)
  
