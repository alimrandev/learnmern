const {getDb} = require('./mongo');

const createCollection = ()=> {
    const db = getDb()
    const collection = db.collection("teachers", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                title: "student object validation",
                required: ["name", "phone", "age", "city"],
                properties: {
                    name: {
                        bsonType: "string",
                        description: "Name mustbe string and required"
                    },
                    phone: {
                        bsonType: "string",
                        description: "must be string and required"
                    },
                    age: {
                        bsonType: "int",
                        minimum:20,
                        maximum:100,
                        description: "must be string and required"
                    },
                    city: {
                        enum: ["chittagong", "dhaka", "noakhali", "feni"],
                        description: "Only Allow specific city"
                    },

                }
            }
        }
    })

    return collection;
}


module.exports = {
    Student: createCollection()
}