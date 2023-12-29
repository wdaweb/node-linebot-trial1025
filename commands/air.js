import axios from 'axios'
import airTemplate from '../templates/air.js'
// import fs from 'node:fs'

export const getAir = async (event) => {
  try {
    const { data } = await axios.get('https://data.moenv.gov.tw/api/v2/aqx_p_488?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=datacreationdate%20desc&format=JSON')

    if (Array.isArray(data.records)) {
      const sitename = data.records[0].sitename
      const county = data.records[0].county
      const status = data.records[0].status
      const pm25 = data.records[0]['pm2.5']
      const datacreationdate = data.records[0].datacreationdate
      // 圖片
      const imageUrl = new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCu8DP8vVN3uYmseQ8U-GPhyZ6mpV1uCxorg&usqp=CAU')

      // return `站點名稱: ${sitename}, 縣市: ${county}, 狀態: ${status}, PM2.5: ${pm25}, ${datacreationdate}`

      // 樣式
      const template = airTemplate()

      template.hero.url = `${imageUrl}`
      template.body.contents[0].text = `${sitename}`
      template.body.contents[1].contents[0].contents[0].text = `${county}`
      template.body.contents[1].contents[1].text = `${status}`
      template.body.contents[1].contents[2].text = `pm2.5:${pm25}`
      template.body.contents[1].contents[3].text = `${datacreationdate}`

      // if (process.env.DEBUG === 'true') {
      //   fs.writeFileSync('./dump/air.json', JSON.stringify(template, null, 2))
      // }
      const replies = []
      replies.push(template)
      const result = await event.reply({
        type: 'flex',
        altText: '查詢結果',
        contents: template
      })
      // console.log('Event object:', event)
      // console.log(JSON.stringify(result, null, 2))
      console.log(result)
    }
  } catch (error) {
    console.log(error)
  }
}

// 需要提供 event 物件來測試這個函數
// update(event);
