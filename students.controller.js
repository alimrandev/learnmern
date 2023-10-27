const {create, search, getById, deleteStudent,updateStudent} = require('./students.service.js')

const setupRouts = (app)=> {

console.log('Routing Connected');
//create API endpoints

//GET
app.get("/api/students/detail/:id", async(req, res)=> {
    const result = await getById(req.params.id)
    res.send(result);
})

app.post("/api/students/search", async(req,res)=> {
    const result = await search(req.body);
    res.send(result);
})

app.post("/api/students/create", async (req,res)=> {
    const result = await create(req.body);
    res.send(result);
})

app.put("/api/students/update/:id", async (req,res)=> {
    const result = await updateStudent(req.params.id, req.body)
    res.send(result);
})

app.delete("/api/students/delete/:id", async(req,res)=> {
    const result = await deleteStudent(req.params.id);
    res.send(result);
})

}

module.exports = {setupRouts}