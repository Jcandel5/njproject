const dbjared_Database = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(dbjared_Database);

function listAllStudents(){
    return knex('njtable')
}
function getByStudentId(id){
    return knex('njtavle').where('id', id)
}
function createStudent(newStudent){
    return knex('njtable').insert(newStudent).returning('*')
}

function deleteStudentById(id){
    return knex('njtable').where('id', id).delete()
}


module.exports = {
    listAllStudents,
    getByStudentId,
    createStudent,
    deleteStudentById

}