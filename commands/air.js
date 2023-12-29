import axios from 'axios'
import airTemplate from '../templates/air.js'

export const getAir = async (event) => {
  try {
    const userQuery = event.message.text
    const { data } = await axios.get('https://data.moenv.gov.tw/api/v2/aqx_p_488?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=datacreationdate%20desc&format=JSON')

    const filteredRecords = data.records.filter(record => record.county.includes(userQuery))

    if (filteredRecords.length === 0) {
      await event.reply({ type: 'text', text: '沒有找到相關資料。' })
      return
    }

    const flexMessages = filteredRecords.slice(0, 5).map(record => {
      const { sitename, county, status, 'pm2.5': pm25, datacreationdate } = record
      const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCu8DP8vVN3uYmseQ8U-GPhyZ6mpV1uCxorg&usqp=CAU'

      const template = airTemplate()

      template.hero.url = imageUrl
      template.body.contents[0].text = sitename
      template.body.contents[1].contents[0].contents[0].text = county
      template.body.contents[1].contents[1].text = status
      template.body.contents[1].contents[2].text = `pm2.5:${pm25}`
      template.body.contents[1].contents[3].text = datacreationdate

      return template
    })

    await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: flexMessages
      }
    })
  } catch (error) {
    console.log(error)
    await event.reply({ type: 'text', text: '查詢過程中發生錯誤。' })
  }
}
