//here write all database actions
const {getDb, getCollectin, ObjectId} = require('./mongo');
const {Student} = require('./student.model');

//create
const create = async (dataObj)=> {
    const result = await Student.insertOne(dataObj);
    return result;
}

//search
const search = async (searchObj)=> {
    // const db = await getDb();
    // const collection = db.collection('students'
    const result = await Student.find(searchObj).toArray();
    return result;
}

const getById = async (id)=> {
    const result = await Student.findOne({_id: new ObjectId(id)});
    return result
}

const deleteStudent = async (id)=> {
    const result = await Student.deleteOne({_id: new ObjectId(id)});
    return result
}

const updateStudent = async (id, updateObj)=> {
    const result = await Student.updateOne({_id: new ObjectId(id)},{"$set":updateObj});
    return result;
}





module.exports = {
    create,
    search,
    getById,
    deleteStudent,
    updateStudent
}
