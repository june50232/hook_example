import React, { useEffect } from 'react'
import Experts from './Experts'

// homework：call 完 api1, 取得 id call api2
// api1. 取得所有專家：https://careu.104-dev.com.tw/api/experts
// api2. 取得該專家所有問答：https://careu.104-dev.com.tw/api/experts/{id}/posts
export default function UseEffectHomework(props) {

  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('UseEffect')

    fetch('https://careu.104-dev.com.tw/api/experts')
        .then(res => {
          console.log('res === :' +  res.json())
          return res.json()
        })
        .then(response => {

            console.log(response)
            // 不能這樣寫
            fetch(`https://careu.104-dev.com.tw/api/experts/${response.data[0].id}/posts`).then(response => {
              console.log(response)
              return response.json()
            }).then(res => {
              console.log(res)
            })

        })
        .catch(() => {
          console.log(
              'No internet connection found. App is running in offline mode.'
          );
        });

  }, [])
  return (
    <div>
      homework：call 完 api1, 取得 id call api2 印在下面
      {/*<Experts/>*/}
    </div>
  )
}
