// index.js
import 'dotenv/config'
import linebot from 'linebot'
import { getAir } from './commands/air.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  if (event.message.type === 'text') {
    if (event.message.text === '空氣品質') {
      const airQuality = await getAir()
      event.reply(airQuality)
    } else if (event.message.type === 'text') {
      event.reply(event.message.text)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
