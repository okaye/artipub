const mongoose = require('mongoose')

const platformSchema = new mongoose.Schema({
    name: String,
    label: String,
    editorType: String,
    description: String,
    createTs: Date,
    updateTs: Date,
})

const Platform = mongoose.model('platforms', platformSchema)

module.exports = Platform
