import { Telegraf } from 'telegraf'

import { config } from 'dotenv'
import start from './start'
import messageHanlder from './message'

config()

const BOT_TOKEN = process.env.BOT_TOKEN!
const Main = async () => {
  const Bot = new Telegraf(BOT_TOKEN)
  start(Bot)
  messageHanlder(Bot)
  Bot.launch()
}

Main()
