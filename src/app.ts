import express from 'express'
import { tag } from 'markup-tag-gen'
import { config } from 'dotenv'
config()
import connect from './Database/connection'
import { css } from './css'
import getLb from './Lb'

const main = async () => {
    const app = express()
    await connect()
    const lb = new getLb()

    app.get('/', async (_req, res) => {
        const entries = lb.getLb().map(({ ID, data }, index) =>
            tag(
                'div',
                {
                    class: 'leaderboardentry',
                    style: 'background: rgba(100, 255, 180, .6)'
                },
                tag(
                    'p',
                    {
                        class: 'leaderboardentrylabel'
                    },
                    `#${index + 1}: ${data.name || 'User'}#${(ID || '').substring(6, 10)} | EXP - ${data.exp} ${
                        index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''
                    }`
                )
            )
        )
        const body = tag(
            'body',
            {
                id: 'body'
            },
            tag('img', {
                src: 'https://i.ibb.co/MDf15Dx/Infinity-botto.webp',
                alt: 'Infinity botto',
                height: '100'
            }),
            tag('br'),
            tag(
                'div',
                {
                    class: 'leaderboard'
                },

                ...entries
            )
        )
        const tags = tag(
            'html',
            {
                lang: 'en'
            },
            tag(
                'head',
                tag('meta', {
                    'http-eqiv': 'content-type',
                    content: 'text/html; charset=utf-8'
                }),
                tag('title', '🚀 Infinity Leaderboard'),
                tag('viewport', {
                    width: 'device-width',
                    'initial-scale': '1',
                    'user-scalable': 'no'
                }),
                body
            ),
            tag('style', css)
        )
        res.send(tags)
    })

    app.get('*', (_req, res) => res.redirect('/'))
    app.listen(process.env.PORT || 3000, () => `Started!`)
}

main()
