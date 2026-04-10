import { useRef } from 'react'

function Description({name, desc}) {
    return (
        <dialog ref={dialog} onClick={onDialogClick}>
            <p>{desc}</p>
        </dialog>
    )
}


function Poi({x, y, name, desc}) {
    const dialog = useRef(null)

    function onPoiClick() {
        if (dialog.current)
            dialog.current.showModal()
    }

    function onDialogClick() {
        if (dialog.current)
            dialog.current.close()
    }

    return <>
    <div style={{
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        translate: '-50% -50%',
    }} onClick={onPoiClick}>
        <div className="flex flex-col items-center hover:font-bold hover:cursor-pointer group">
            <span className="border border-white w-4 h-4 rounded-full group-hover:bg-white"></span>
            <span className="text-white">{name}</span>
        </div>
    </div>
    <dialog ref={dialog} onClick={onDialogClick}>
        <p>{desc}</p>
    </dialog>
    </>
}

export default Poi