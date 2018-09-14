const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())


app.get('/', (request,response) => {
    queries.listAllStudents().then((wtvr) => {
        response.json({wtvr})
    })
})
app.get('/:id', (request, response) => {
    queries.getByStudentId(req.params.id).then((student) => {
        response.json({student})
    })
})
app.post('/', (request, response) => {
    console.log(request.body)
    queries.createStudent(request.body)
    .then(student => request.json({student}))
})
app.put('/', (request, response) => {
    response.send('Put request works')
})
app.delete('/', (request, response) => {
    queries.deleteStudentById(request.params.id).then((data) => {
        res.json(data)
    })
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})