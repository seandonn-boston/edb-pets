# Input Form and Table App


## Problem Statement
Using familiar-to-you libraries of React widgets and tools, create a styled
React App that has one input form to collect data about `pets` and one table
view to display the data collected so far. Assuming that the app will have
at least few other input forms and table views, choose the app layout and
create the user experience as you see fit. Other developers should be able
to add more views to the app without making substantial modifications to the
app UI layout.
The App should communicate with a simple REST API that fulfills the contract 
exposed by the OpenAPI spec detailed below.  The input form should collect the 
exposed properties of the `Pet` Schema.  The table view should expose all the
data collected.  The api route `/pets` should be used as a data source 
for the table. Use any framework to create a simple REST server, 
e.g. json-server-npm, or an online service such as jsonplaceholder.
Use your favourite React tools to bootstrap your project and any React widget
library such as Material-UI, Styled Components, etc. and your favorite UI
state management library.


### Openapi Spec
yaml
openapi: "3.0"
info:
  version: 1.0.0
  title: OpenAPI Petstore
  license:
    name: MIT
servers:
- url: https://petstore.openapis.org/v1
  description: Development server
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
      - pets
      parameters:
      - name: limit
        in: query
        description: How many items to return at one time (max 100)
        required: false
        schema:
          type: integer
          format: int32
      responses:
        "200":
          description: An paged array of pets
          headers:
            x-next:
              schema:
                type: string
              description: A link to the next page of responses
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pets'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    post:
      summary: Create a pet
      operationId: createPets
      tags:
      - pets
      responses:
        "201":
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
      - pets
      parameters:
      - name: petId
        in: path
        required: true
        description: The id of the pet to retrieve
        schema:
          type: string
      responses:
        "200":
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pets'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
components:
  schemas:
    Pet:
      required:
      - id
      - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      items:
        $ref: '#/components/schemas/Pet'
    Error:
      required:
      - code
      - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string


## Deliverable
A functional React App
Instructions on how to add a data view to the app.


## Bonus points for:
- clean, concise and readable code
- unit and/or other tests


## Evaluation Criteria
1. Following React best practices & idioms
2. UI design best practices, good user experience
3. Simplicity of implementation combined with extensibility of design

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run server`

Utilizing json-server, this command will boot up a simple REST server for pets.json on port 3001.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
