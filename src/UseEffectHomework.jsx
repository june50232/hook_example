/**
 * Homework：call 完 api1, 取得 id call api2
 *
 * DIY api1 取得 data1：
 * https://data.taipei/#/dataset/detail?id=6f03a0b8-7b98-4eea-8bb9-ba6bfcdc2b8b
 * api GET https://tinyurl.com/y5f9dcsj
 *
 * DIY2 api2 有 data1 後再取得 data2：
 * https://data.taipei/#/dataset/detail?id=ef1813fb-6685-4841-a5c0-6e2acb2c0650
 * api GET https://tpeoc.blob.core.windows.net/blobfs/GetFTDDamData.json
 *
 */

import React, {
    // DIY、DIY2 step1
    useState,
    useEffect
} from 'react'

// https://stackoverflow.com/waterDatas/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export default function UseEffectHomework(props) {
  // DIY、DIY2 step2 確認參數
  const [
      stations,
      setStations
  ] = useState([])

  const [
      waterDatas,
      setWaterDatas
  ] = useState([])

  // DIY step3 call api
  useEffect(() => {

    fetch(proxyUrl + 'https://tinyurl.com/y5f9dcsj')
        // DONT: 不能這樣寫
        // .then(res => {
        //   console.log('res === :' +  res.json())
        //   return res.json()
        // })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            // DONT: 不能直接 call 第二次的樣子
            // fetch(`https://careu.104-dev.com.tw/api/experts/${response.data[0].id}/posts`).then(response => {
            //   console.log(response)
            //   return response.json()
            // }).then(res => {
            //   console.log(res)
            // })

            // DIY step4 save response
            setStations(result.data)
        })
        .catch(() => {
          console.log(
              'No internet connection found. App is running in offline mode.'
          );
        });
  }, [])

  // DIY2 step4
  useEffect(() => {
      if (stations && stations.length > 0) {
          fetch(proxyUrl + 'https://tpeoc.blob.core.windows.net/blobfs/GetFTDDamData.json')
              .then(res => res.json())
              .then(response => {
                  console.log(response)

                  // DIY2 step5
                  setWaterDatas(response)
              })
      }
  }, [stations])

  return ( // DIY、DIY2 step3 確認參數的 render
    <div>
      <b>homework：call 完 api1, 取得 id call api2 印在下面</b>
        <br/>
        {stations.map((station, index) => <p key={index}>{station.stationName}</p>)}
        <br/>
        {waterDatas.map((waterData, index) => <p key={index}>{waterData.Dam_Info_WaterLevel}</p>)}
        {/* ori ans: <Experts/> */}
    </div>
  )
}
