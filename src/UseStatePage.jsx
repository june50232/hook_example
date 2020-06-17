import React, {

    // DIY step1
    useState,
} from 'react'

/**
 * useState ppt p.4
 *
 * 元件 state 的變數與設定方法宣告
 * const [count, setCount] = useState(0)
 * 注意！若setCount中的值跟原本的count一樣時, 不會執行！
 *
 * DIY: 將 render 的 count 換成用 state 呈現
 * DIY2: 點擊 +1 btn 改變 render count
 *
 */
export default function UseStatePage(props) {
  // DIY step2
  const [
      count,
      setCount
  ] = useState(0)

  // DIY2 step1
    // 一般簡單情況可以直接拿上面的 count, setCount 變數來用
    // 或 function add () { setCount(count + 1) }
  const add = () => setCount(count + 1)

  return (
    <div>
        {/* DIY step3 */}
      Count: {count}
      <br/>
      <button
        // DIY2 step2
        onClick={add}
      >+1</button>
    </div>
  )
}
