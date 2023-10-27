const {MongoClient, MongoServerError, ObjectId} = require('mongodb');
//create mongo client 

let _db = null;

const connect = async ()=> {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    console.log('Connect from mongo.js');
    _db = client.db('schooldb');
    // console.log(_db);
}

const getDb = () => {

    return _db
}

const getCollectin = ()=> {
    return {
        Student : _db.collection('students')
    }
}

module.exports = {connect, getDb, getCollectin, ObjectId}