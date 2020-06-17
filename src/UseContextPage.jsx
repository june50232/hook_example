/**
 * useContext ppt p.6
 *
 * 數個元件共用同樣的值
 * 如果要修改共用值可以透過 .Provider
 * 和一般共用變數的差別: 可以只改幾個子 components 的值
 *
 * DIY 修改共用值 name
 * DIY2 只改幾個子 components 的值
 *
 */

import React, {

    // step3
    useContext
} from 'react'

// step1
const initialIdentity = {
    name: 'Ori',
    age: 30
}

// step2
const Identity = React.createContext(initialIdentity)

function ShowName() {
    // step3
    const object = useContext(Identity)

    // step1
    return (
        <p>Name: {object.name}</p>
    )
}

export default function UseContextPage(props) {

    return (
        <div>
            {/* DIY2 針對特定子元件變更值 */}
            <Identity.Provider
                value={{
                    name: 'June' // 可以結合 state
                }}
            >
                <ShowName/>
                <ShowName/>
            </Identity.Provider>
            <ShowName/>
            <ShowName/>
        </div>
    )
}
