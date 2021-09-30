const Item = require('./Item')

// CRUDL
async function create(req, res) {
    try {
        const newItem = await new Item({
            name: req.body.name,
            amount: req.body.amount
        })
        newItem.save()
        res.json(newItem)
    } catch(err) {
        console.log(err)
    }
}

async function destroy(req, res) {
    try {
        const item = await Item.findById(req.params.id)
        item.remove()
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.json('Item not Found.')
    }
}

async function list(req, res) {
    try {
        const items = await Item.find()
        res.json(items)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    create,
    delete: destroy,
    list
}