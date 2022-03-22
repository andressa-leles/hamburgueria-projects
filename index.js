const { request } = require('express')
const { response } = require('express')
const express = require('express')
const uuid = require('uuid')

const port = 3001
const app = express()
app.use(express.json())

const orders = []

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()

}

const shippingMeans = (request, response, next) => {

    const method = request.method
    const url = request.path
    console.log('Method:', method, '***', 'URL', url)

    next()
}

app.get('/orders', shippingMeans, (request, response) => {
    return response.json(orders)
})

app.post('/orders', shippingMeans, (request, response) => {
    const { clientName, order, price } = request.body

    const orderNumbers = { id: uuid.v4(), clientName, order, price, status: 'Em preparação' }

    orders.push(orderNumbers)

    return response.status(201).json(orderNumbers)
})

app.put('/orders/:id', checkOrderId, shippingMeans, (request, response) => {

    const { clientName, order, price } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updatedOrders = { id, clientName, order, price }

    orders[index] = updatedOrders

    return response.json(updatedOrders)
})

app.delete('/orders/:id', checkOrderId, shippingMeans, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

app.patch('/orders/:id', checkOrderId, shippingMeans, (request, response) => {
    const index = request.orderIndex
    const { id, clientName, order, price } = orders[index]
    const orderReady = { id, clientName, order, price, status: 'Pedido pronto!'}

    orders[index] = orderReady

    return response.json(orderReady)
})


app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})