"use strict";
const express = require("express");
const faker = require("faker");
const cors = require("cors");
//faker.locale = "ru";

const app = express();

app.use(cors());

app.get("/",(req,res) =>{
    console.log("Пришел запрос на сервер!");
    console.log(new Date());

    res.send("Hello world");
});

app.get("/random", (req,res) =>{
    const data = {
      user:{
          firstName: faker.name.firstName("f"),
          lastName: faker.name.lastName("f"),
          email: faker.internet.email(),
      },
      company: faker.company.companyName()
    };
    //res.send(JSON.stringify(data));
    res.json(data);
});

app.listen(3000,err =>{
    if(err) return console.error("Ошибка запуска сервера");
    console.log("Сервер запущен");
});