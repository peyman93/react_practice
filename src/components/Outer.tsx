import { useCallback, useState } from "react"
import Inner from "./Inner"

const Outer = () => {
    const [count, setCount] = useState(0)

    const onInnerTap = useCallback(() => {
        console.log('Inner Tapped');
    }, [])

    return (
        <div style={{ backgroundColor: "lightblue" }}>
            This Is Outer<br />
            <Inner onTap={onInnerTap} />
            {count}<br />
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default Outer