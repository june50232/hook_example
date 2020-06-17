import React, {
    useState,

    // DIY step1
    useEffect
} from 'react'

/**
 * useEffect ppt p.5
 *
 * 元件副作用
 * 常用於call api
 * 可替代 componentDidMount、componentDidUpdate、componentWillUnmount 等
 *
 * DIY: count > 10 時 印 console.log
 * DIY2: 監聽到 scroll 事件 印 console.log、離開頁面時解除監聽事件
 *
 */
export default function UseEffectPage(props) {
  const [
      count,
      setCount
  ] = useState(0)

  const add = () => setCount(count + 1)

  // DIY step2
  useEffect((
      // DIY step4 : 這邊除非是 btn onClick 不然不用帶
      ) => {

      // DIY step5
      if (count > 10) console.log('count 大於 10')
  },
      // DIY step3: 當 count 改變時，執行這個 useEffect
      [count]
  )

  // DIY2 step1
  useEffect(() => {

    // DIY2 step3：初始 render 完執行一次 (DidMount) 的 fn
    window.addEventListener('scroll', console.log('scroll'))

    // DIY2 step4：元件消滅前執行一次 (willUnmount) 的 fn
    return () => {
        window.removeEventListener('scroll', console.log('stop listen scroll'))
    }
  },
      // DIY2 step2 如果 [] 空陣列: 初始 render 完執行一次 (DidMount)、return 則是元件消滅前執行一次 (willUnmount)
      []
  )


  return (
    <div>
      Count: {count}
      <br/>
      <button
       onClick={add}
      >+1</button>
    </div>
  )
}
