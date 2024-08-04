import { memo } from 'react'

const Inner = ({ onTap }: { onTap: () => void }) => {
    console.log('Inner Rendered');

    return (
        <div onClick={onTap}>Inner</div>
    )
}

export default memo(Inner)