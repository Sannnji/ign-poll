<br>
<div align="center">
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="ign-logo-light.svg" width="150px">
    <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="ign-logo-dark.svg" width="150px">
  </picture>
</P> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<br>

# IGN Code Foo 2023 Application

This repository contains a polling application created for the 2023 IGN Code Foo program's coding 
<br>
portion and the Hisui Power Plant plan. To view the power plant plan navigate to the directory within Github.
<br>
<br>
The project contains a backend, frontend, and a docker container for MongoDB.
<br>
Docker is reccomended to run this application, otherwise please download MongoDB 
<br>
and modify the connection string in "backend/src/index.js" as needed
<br>
<br>

## Getting Started
</div>

```zsh
// run at root dir to start docker MongoDB container
➜ ~ docker-compose up -d 
```

<br>


```zsh
// run within the respective dir to start backend || frontend to install dependencies
➜ ~ yarn 
// or
➜ ~ npm install
```

<br>

```bash
// run within the respective dir to start backend || frontend
➜ ~ yarn start
// or
➜ ~ npm start
```
