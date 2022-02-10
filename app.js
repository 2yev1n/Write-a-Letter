const express = require("express");
const app = express();
const cors = require("cors");

const { sequelize } = require("./models");
const router = require("./routes/index");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/", router);

app.set("jwt-secret", process.env.JWT_KEY);

app.get("/", (req, res) => {
    res.send(data);
})

sequelize.sync({ force : false })
    .then(() => {
        console.log("database 연결 성공")
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT, "번에서 대기 중")
});