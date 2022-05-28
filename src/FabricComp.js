import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";

function FabricComp() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [clicked, setClicked] = useState('false');
    const containerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        let canvas = new fabric.Canvas(`canvas`, {
            height: containerRef.current.clientHeight,
            width: containerRef.current.clientWidth,
            backgroundColor: "grey",
            selection: false
        })

        let rect = new fabric.Rect({
            top: 150,
            left: 300,
            height: 50,
            width: 80,
            fill: 'red'
        })

        canvas.add(rect);
        containerRef.current.addEventListener('click', () => {
            canvas.on("mouse:down", (e) => {
                setClicked('true');
            })
            canvas.on("mouse:up", (e) => {
                setX(Math.round(e.pointer.x));
                setY(Math.round(e.pointer.y));
                setClicked('false');
            })
        })
    }, [])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '2em', paddingRight: '2em'}}>
                <div>
                    <p>fabric canvas works!</p>
                    <p>Shape clicked: {clicked}</p>
                    <p>x-axis position: {x !== 0 && x}</p>
                    <p>y-axis position: {y !== 0 && y}</p>
                </div>
                <p>Drag around 1-2 times before it registers</p>
                <p>Solution by: Rohan Shah</p>
            </div>
            <div ref={containerRef} style={{ height: '100vh', width: '100vw' }}>
                <canvas
                    ref={canvasRef}
                    id="canvas" />
            </div>
        </div>
    )
}

export default React.memo(FabricComp);