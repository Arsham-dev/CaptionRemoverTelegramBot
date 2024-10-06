import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

const start = (Bot: Telegraf<Context<Update>>) => {
  Bot.start((ctx) => {
    ctx.reply('Hi, This is caption remover bot. Send me a photo or video with caption to remove caption from it.')
  })
}

export default start
