import express from 'express'
import { tag } from 'markup-tag-gen'
import { config } from 'dotenv'
config()
import connect from './Database/connection'
import User from './Database/Models/User'

const main = async () => {
    const app = express()
    await connect()
    app.get('/', async (req, res) => {
        const tags = (await User.find())
            .map((data) => ({
                ID: data.jid,
                data
            }))
            .sort((a, b) => (b?.data?.exp || 0) - (a?.data?.exp || 0))
            .slice(0, Number(req.query.limit) || 25)
            .map((data, index) =>
                tag(
                    'div',
                    {
                        className: 'test-class',
                        id: 'test-id',
                        style: 'color: red;'
                    },
                    `#${index + 1} ${data.data.name || 'User'} | Exp: ${data.data.exp}`
                )
            )

        res.send(tag('html', ...tags))
    })

    app.listen(3000, () => console.log('started'))
}

main()
