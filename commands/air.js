import axios from 'axios'
import airTemplate from '../templates/air.js'

export const getAir = async () => {
  try {
    const { data } = await axios.get('https://data.moenv.gov.tw/api/v2/aqx_p_488?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=datacreationdate%20desc&format=JSON')
    const replies = []

    if (Array.isArray(data.records)) {
      const sitename = data.records[0].sitename
      const county = data.records[0].county
      const status = data.records[0].status
      const pm25 = data.records[0]['pm2.5']
      const datacreationdate = data.records[0].datacreationdate
      // 圖片
      const imageUrl = new URL('https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png')

      const template = airTemplate()

      template.contents[0].hero.url = imageUrl
      template.contents[0].body.contents[0].text = sitename
      template.contents[0].body.contents[1].contents[0].contents[0].text = county
      template.contents[0].body.contents[1].contents[1].text = status
      template.contents[0].body.contents[1].contents[2].text = pm25
      template.contents[0].body.contents[1].contents[3].text = datacreationdate
      replies.push(template)
      // // 組建一個消息物件
      // const message = {
      //   type: 'text',
      //   text: `站點名稱: ${sitename}\n縣市: ${county}\n狀態: ${status}\nPM2.5: ${pm25}`
      // }
      return {
        type: 'carousel',
        contents: template
      }
    }
  } catch (error) {
    console.log(error)
    return { type: 'text', text: '獲取空氣品質數據時發生錯誤。' }
  }
}

// 需要提供 event 物件來測試這個函數
// update(event);
