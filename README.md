# A Complete Express.js App with MongoDB

## Project Summary
This is a small but complete Express.js application that demonstrates the use of servers, routing, middleware, and MVC organization in backend development. The app displays static data and allows for CRUD operations through API endpoints.

## How to Install

- Ensure that NodeJS and Node Package Manager are installed on your device. 
- Open a Terminal and cd to the root of the project.
- Submit the command "npm install" for the needed packages to download for the server. 

## How to Run the Server

- Within a Terminal, make sure you are in the root of a project.
- Type "npm start" to start the backend. 
- If no errors are shown open your browser and go to http://localhost:3000/ to see the welcome page.

## What Each API Endpoint Does

- GET /api/items — returns all items
- GET /api/items/:id — returns one item
- POST /api/items — creates a new item
- PATCH /api/items/:id — updates an item
- DELETE /api/items/:id — deletes an item
## CRUD Endpoint Documentation

| Method | Endpoint     | Action                       | Successful Status Code     |
| :-------- | :------- | :-------------------------------- | :------- |
| `GET`      | `/api/items` | Return all events | `200` |
| `GET`      | `/api/items/:id` | Return one event by ID | `200` |
| `POST`      | `/api/items` | Register a new user | `201` |
| `PATCH`      | `/api/items/:id` |  Update an event | `200` |
| `DELETE`      | `/api/items/:id` |  Delete an event | `204` |
## Optional Features

The site displays data in cards, as an optional enhancement to the project requirements.

## Screenshots of Postman Tests

#### GET all items:
![Get all items](https://midterm-complete-app-fhsu.netlify.app/new/get-all-req.png)

#### GET one item:
![Get one item](https://midterm-complete-app-fhsu.netlify.app/new/get-one-req.png)

#### POST new item:
![Post New Item](https://midterm-complete-app-fhsu.netlify.app/new/post-req.png)

#### PATCH existing item:
![Patch existing item](https://midterm-complete-app-fhsu.netlify.app/new/patch-req.png)

#### DELETE item:
![Delete an item](https://midterm-complete-app-fhsu.netlify.app/new/delete-req.png)

#### Invalid MongoDB ID:
![404 Error Response](https://midterm-complete-app-fhsu.netlify.app/new/invalid-id.png)

#### Item that does not exist
![404 Error Response](https://midterm-complete-app-fhsu.netlify.app/new/route-not-found.png)