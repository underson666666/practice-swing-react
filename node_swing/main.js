const cluster = require("cluster")
cluster.schedulingPolicy = cluster.SCHED_NONE
const http = require("http")
const numCpus = require("os").cpus().length

let counter = 0

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)

    // Fork workers
    for (let i = 0; i< numCpus; i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`exit ${code} : ${signal}`)
        // workerが明示的な正常終了でなければ、workerを再生成して補充する
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            cluster.fork()
        }
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        counter++
        res.end(`hello world ${process.pid}: counter:${counter}\n`)
    }).listen(8000)

    console.log(`Worker ${process.pid} started`)
}
