const mongoose = require('mongoose')


const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/usertodo')
        console.log("successfully connected to MongDB =)")
    } catch (err) {
        console.log(err)
    }
}

export default connectToMongo