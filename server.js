//import app
const app = require('./app');
const {connect} = require('./mongo')

const PORT = 4000;
const HOST = 'localhost';

//setup rout after db connect
const setup = ()=> {
    const {setupRouts} = require('./students.controller')
    setupRouts(app)
}

app.listen(PORT, async()=> {
    console.log('Connect from server.js')
    await connect();
    console.log(`server listen @ ${PORT}`);
    setup()
})

