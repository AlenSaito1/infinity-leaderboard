import User from './Database/Models/User'

export default class {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private users: { ID?: string; data: any }[] = []

    constructor(limit = 50) {
        setInterval(async () => {
            console.log('Updating Users...')
            this.users = await this.fetch(limit)
        }, 120000)
        this.fetch(limit).then((data) => {
            this.users = data
        })

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    fetch = async (limit?: number) =>
        (await User.find())
            .map((data) => ({
                ID: data.jid,
                data
            }))
            .sort((a, b) => (b?.data?.exp || 0) - (a?.data?.exp || 0))
            .slice(0, Number(limit) || 25)

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getLb = () => this.users
}
