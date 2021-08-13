import { prop, getModelForClass } from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { WaifuResponse } from 'mywaifulist-scraper'

export interface IPokemon {
    uuid: string
    name: string
    exp: number
    level: number
    image: string
}

export interface IUser {
    jid: string
    exp: number
    banReason: string
    haigusha?: WaifuResponse
    dex: string[]
    party: IPokemon[]
    pc: IPokemon[]
    gold: number
    diamonds: number
    items: string[]
    idle: boolean
    bank: number
    bio: string
    quizwins?: number
    res?: {
        res: string
        resp: string
    }
    ban: boolean
}
// prettier-ignore
class User implements Partial<IUser> {

    @prop({ type: String, unique: true })
    jid?: string;

    @prop({ type: String })
    name?: string;

    @prop({ type: Number, default: 0 })
    exp?: number;

    @prop({ type: Schema.Types.Mixed })
    banReason?: string;

    @prop({ type: Schema.Types.Mixed })
    haigusha?: WaifuResponse;

    @prop({ type: Array })
    dex?: string[];

    @prop({ type: Array, default: [] })
    party?: IPokemon[];

    @prop({ type: Array, default: [] })
    pc?: IPokemon[];

    @prop({ type: Schema.Types.Mixed })
    gold?: number;

    @prop({ type: Number, default: 0 })
    diamonds?: number;

    @prop({ type: Schema.Types.Mixed, default: [] })
    items?: string[];

    @prop({ type: Boolean, default: false })
    idle?: boolean;

    @prop({ type: Number, default: 0 })
    bank?: number;

    @prop({ type: Schema.Types.Mixed })
    bio?: string;

    @prop({ type: Number, default: 0 })
    quizwins?: number;

    @prop({ type: Schema.Types.Mixed })
    res?: { 
        res: string,
        resp: string
    };

    @prop({ type: Boolean, default: false })
    ban?: boolean;

    @prop({ type: Date })
    daily?: Date;

    @prop({ type: Number })
    hid?: number;

    @prop({ type: String, default: '' })
    icon?: string
}

export default getModelForClass(User)
