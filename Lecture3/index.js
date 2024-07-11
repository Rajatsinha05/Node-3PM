
const express = require("express");
const app = express();
app.use(express.json());
let db = []
app.get("/", (req, res) => {
    res.send(db);
})
app.post("/", (req, res) => {
    let { name, email, password } = req.body
    let user = {
        name: name,
        email: email,
        password: password,
        id: db.length == 0 ? 1 : db[db.length - 1].id + 1
    }

    db.push(user)
    res.send("data is saved successfully")
});

app.delete("/:index", (req, res) => {
    let { index } = req.params;
    db.splice(index, 1)
    res.send("delete from index where  id = " + req.params.index)
})


app.listen(8090, () => {
    console.log("listening on port 8090");
})

