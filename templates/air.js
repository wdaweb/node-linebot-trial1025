export default () => {
  return {
    type: 'bubble',
    size: 'micro',
    hero: {
      type: 'image',
      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
      size: 'full',
      aspectMode: 'cover',
      aspectRatio: '320:213'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '站點:屏東(枋山)',
          weight: 'bold',
          size: 'sm',
          wrap: true
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '屏東縣',
                  wrap: true,
                  color: '#8c8c8c',
                  size: 'xs',
                  flex: 5
                }
              ]
            },
            {
              type: 'text',
              text: '空氣品質:良好',
              size: 'xs'
            },
            {
              type: 'text',
              text: 'PM2.5:18',
              size: 'xs'
            },
            {
              type: 'text',
              text: '2023-12-28 23:00',
              size: 'xxs'
            }
          ]
        }
      ],
      spacing: 'sm',
      paddingAll: '13px'
    },
    styles: {
      hero: {
        backgroundColor: '#000000'
      },
      footer: {
        separator: false
      }
    }
  }
  // {
  //   type: 'bubble',
  //   size: 'micro',
  //   hero: {
  //     type: 'image',
  //     url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg',
  //     size: 'full',
  //     aspectMode: 'cover',
  //     aspectRatio: '320:213'
  //   },
  //   body: {
  //     type: 'box',
  //     layout: 'vertical',
  //     contents: [
  //       {
  //         type: 'text',
  //         text: '站點:屏東(枋山)',
  //         weight: 'bold',
  //         size: 'sm',
  //         wrap: true
  //       },
  //       {
  //         type: 'box',
  //         layout: 'vertical',
  //         contents: [
  //           {
  //             type: 'box',
  //             layout: 'baseline',
  //             spacing: 'sm',
  //             contents: [
  //               {
  //                 type: 'text',
  //                 text: '屏東縣',
  //                 wrap: true,
  //                 color: '#8c8c8c',
  //                 size: 'xs',
  //                 flex: 5
  //               }
  //             ]
  //           },
  //           {
  //             type: 'text',
  //             text: '空氣品質:良好',
  //             size: 'xs'
  //           },
  //           {
  //             type: 'text',
  //             text: 'PM2.5:18',
  //             size: 'xs'
  //           },
  //           {
  //             type: 'text',
  //             text: '2023-12-28 23:00',
  //             size: 'xxs'
  //           }
  //         ]
  //       }
  //     ],
  //     spacing: 'sm',
  //     paddingAll: '13px'
  //   }
  // },
  // {
  //   type: 'bubble',
  //   size: 'micro',
  //   hero: {
  //     type: 'image',
  //     url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg',
  //     size: 'full',
  //     aspectMode: 'cover',
  //     aspectRatio: '320:213'
  //   },
  //   body: {
  //     type: 'box',
  //     layout: 'vertical',
  //     contents: [
  //       {
  //         type: 'text',
  //         text: '站點:屏東(枋山)',
  //         weight: 'bold',
  //         size: 'sm',
  //         wrap: true
  //       },
  //       {
  //         type: 'box',
  //         layout: 'vertical',
  //         contents: [
  //           {
  //             type: 'box',
  //             layout: 'baseline',
  //             spacing: 'sm',
  //             contents: [
  //               {
  //                 type: 'text',
  //                 text: '屏東縣',
  //                 wrap: true,
  //                 color: '#8c8c8c',
  //                 size: 'xs',
  //                 flex: 5
  //               }
  //             ]
  //           },
  //           {
  //             type: 'text',
  //             text: '空氣品質:良好',
  //             size: 'xs'
  //           },
  //           {
  //             type: 'text',
  //             text: 'PM2.5:18',
  //             size: 'xs'
  //           },
  //           {
  //             type: 'text',
  //             text: '2023-12-28 23:00',
  //             size: 'xxs'
  //           }
  //         ]
  //       }
  //     ],
  //     spacing: 'sm',
  //     paddingAll: '13px'
  //   }
  // }
}
