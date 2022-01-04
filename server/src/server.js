const http = require('http')
const { start } = require('repl')
const app = require('./app')


const {loadPlanetsData} = require('./models/planets.models')
const PORT = 8000

const server = http.createServer(app)


async function startServer() {
    await loadPlanetsData()
    server.listen(PORT,()=>{
        console.log('server is listening at port',PORT)
    })

}


startServer()
