//define db name
const dbName = 'shopingCart';


const main = async () => {
    //connect to database
    const client = new MongoClient(url);
    
    const collection = client.db(dbName).collection('cartItems');
    
    // try {
    //   await collection.insertOne({name: 'banana'});
    // } catch (error) {
    //     if (error instanceof MongoServerError) {
    //         console.log(`Error worth logging: ${error}`); // special case for some reason
    //       }
    //       throw error; // still want to crash
    // }
    // const updateItems = await collection.updateOne({name:'FineApple'}, {$set:{name:'banana'}});
    // console.log(updateItems)
    const findItems = await collection.find({name:'banana'}).toArray();
    console.log(findItems);
    client.close();
}

main()
