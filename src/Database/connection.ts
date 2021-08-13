import mongoose from 'mongoose'

const connect = async (): Promise<void> => {
    await mongoose.connect(process.env.MONGO_URI || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

export default connect
