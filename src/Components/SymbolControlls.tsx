import { nanoid } from "nanoid";
import React, { useState } from "react";
import { HexColorInput } from "react-colorful";
import { PopoverPicker } from "./PopoverPicker";
import { symbolSVGs } from "./SVGSymbolPaths";


export interface symbolConfig {
    id: string,
    color1: string;
    color2: string;
    offsetX: number,
    offsetY: number,
    flip: boolean,
    svg_path: string
}

export interface symbolConfigStateP extends symbolConfig {
    id: string,
    setSymbol: (sym: symbolConfig) => void,
    deleteSymbol: (sym: symbolConfig) => void
}

export const defaultSymbolConf: symbolConfig = {
    id: nanoid(),
    color1: "#6a6a6a",
    color2: "#2a2a2a",
    offsetX: 0,
    offsetY: 0,
    flip: false,
    svg_path: symbolSVGs[0].svg
}

export const SymbolControlls = (props: symbolConfigStateP) => {

    const [color1, setColor1] = useState(props.color1);
    const [color2, setColor2] = useState(props.color2);
    const [symbolType] = useState<string>(loadSymbolFromPath(props.svg_path));

    const changeSymbolType = (e: React.FormEvent<HTMLSelectElement>) => {

        let path = "";

        symbolSVGs.forEach(s => {
            if (s.name == e.currentTarget.value)
                path = s.svg;
        })

        props.setSymbol({ ...props, svg_path: path });
    }

    const changeColor1 = (col: string) => {
        setColor1(col);
        props.setSymbol({ ...props, color1: col })
    }

    const changeColor2 = (col: string) => {
        setColor2(col);
        props.setSymbol({ ...props, color2: col })
    }

    return (
        <div className="symConf" style={{ marginBottom: "0.5rem" }}>
            <>
                <div style={{ display: "block", paddingBottom: "1rem", alignItems: "flex-start" }}>
                    <div >
                        <div style={{ display: "flex" }}>
                            <PopoverPicker color={color1} onChange={changeColor1}></PopoverPicker>
                            <HexColorInput className="symbolControl" color={color1} onChange={changeColor1}></HexColorInput>
                            <label style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>OffsetX: </label>
                            <input style={{ marginLeft: "0.5rem" }}
                                name="input" type="number" defaultValue={props.offsetX} min={-50} max={50}
                                onChange={e => props.setSymbol({ ...props, offsetX: Number(e.currentTarget.value) })}>
                            </input>
                        </div>
                        <div style={{ display: "flex" }}>
                            <PopoverPicker color={color2} onChange={changeColor2}></PopoverPicker>
                            <HexColorInput className="symbolControl" color={color2} onChange={changeColor2}></HexColorInput>
                            <label style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>OffsetY: </label>
                            <input style={{ marginLeft: "0.5rem" }}
                                name="input" type="number" defaultValue={props.offsetY} min={-50} max={50}
                                onChange={e => props.setSymbol({ ...props, offsetY: Number(e.currentTarget.value) })}></input>
                        </div>
                    </div>
                    <div style={{ display: " flex", paddingLeft: "0.5rem" }}>
                        <label style={{ marginRight: "0.5rem" }}>Symbol: </label>
                        <select defaultValue={symbolType} onChange={e => changeSymbolType(e)}>
                            {symbolSVGs.map(s => <option value={s.name}>{s.name}</option>)}
                        </select>
                        <button className="symbolBtn" onClick={() => props.deleteSymbol({ ...props })}>Delete</button>
                    </div>
                </div>
            </>
        </div>
    )
}

const loadSymbolFromPath = (path: string): string => {

    symbolSVGs.forEach(s => {
        if (s.svg == path) return s.name;
    })

    return symbolSVGs[0].name;

}