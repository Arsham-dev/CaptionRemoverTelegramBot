import { Context, Telegraf } from 'telegraf'
import { Message, Update } from 'telegraf/typings/core/types/typegram'

const messageHanlder = (Bot: Telegraf<Context<Update>>) => {
  Bot.on('message', async (ctx) => {
    const message = ctx.message as Message.CaptionableMessage
    if (!message.caption) {
      await ctx.reply('Please send me a photo or video with caption to remove caption from it.')
      return
    }

    const videoMessage = ctx.message as Message.VideoMessage

    if (videoMessage.video) {
      await ctx.replyWithVideo({
        source: videoMessage.video.file_id,
      })
      return
    }
    const photoMessage = ctx.message as Message.PhotoMessage

    if (photoMessage.photo) {
      await ctx.replyWithPhoto({
        source: photoMessage.photo[0].file_id,
      })
      return
    }

    const doucmentMessage = ctx.message as Message.DocumentMessage

    if (doucmentMessage.document) {
      await ctx.replyWithDocument({
        source: doucmentMessage.document.file_id,
      })
      return
    }
    const audioMessage = ctx.message as Message.AudioMessage

    if (audioMessage.audio) {
      await ctx.replyWithAudio({
        source: audioMessage.audio.file_id,
      })
      return
    }
    const voiceMessage = ctx.message as Message.VoiceMessage

    if (voiceMessage.voice) {
      await ctx.replyWithVoice({
        source: voiceMessage.voice.file_id,
      })
      return
    }
    const animationMessage = ctx.message as Message.AnimationMessage

    if (animationMessage.animation) {
      await ctx.replyWithAnimation({
        source: animationMessage.animation.file_id,
      })
      return
    }
    const stickerMessage = ctx.message as Message.StickerMessage

    if (stickerMessage.sticker) {
      await ctx.replyWithSticker({
        source: stickerMessage.sticker.file_id,
      })
      return
    }
    const videoNoteMessage = ctx.message as Message.VideoNoteMessage

    if (videoNoteMessage.video_note) {
      await ctx.replyWithVideoNote({
        source: videoNoteMessage.video_note.file_id,
      })
      return
    }
    const locationMessage = ctx.message as Message.LocationMessage

    if (locationMessage.location) {
      await ctx.replyWithLocation(locationMessage.location.latitude, locationMessage.location.longitude)
    }
  })
}
export default messageHanlder
