import React, { useState } from "react";
import { HexColorInput } from "react-colorful";
import { PopoverPicker } from "./PopoverPicker";
import { FatS, leaning4, leaning_One, normal4, path_originalS, path_S4S, path_s4SSharp, path_Z, SleekS, stylish3, stylish4 } from "./SVGSymbolPaths";


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
    setSymbol: (sym: symbolConfig) => void
}

export const SymbolControlls = (props: symbolConfigStateP) => {

    const [color1, setColor1] = useState(props.color1);
    const [color2, setColor2] = useState(props.color2);

    const changeSymbolType = (e: React.FormEvent<HTMLSelectElement>) => {

        let path = "";

        switch (e.currentTarget.value) {
            case "SleekS": path = SleekS; break;
            case "FatS": path = FatS; break;
            case "StylishS": path = path_S4S; break;
            case "SharperStylishS": path = path_s4SSharp; break;
            case "OriginalS": path = path_originalS; break;
            case "leaningOne": path = leaning_One; break;
            case "stylish3": path = stylish3; break;
            case "normal4": path = normal4; break;
            case "leaning4": path = leaning4; break;
            case "Stylish4": path = stylish4; break;
            case "Z": path = path_Z; break;
            default: break;
        }

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
        <div>
            <>
                <div style={{ display: "inline-flex" }}>
                    <div>
                        <PopoverPicker color={color1} onChange={changeColor1}></PopoverPicker>
                        <HexColorInput className="symbolControl" color={color1} onChange={changeColor1}></HexColorInput>
                        <PopoverPicker color={color2} onChange={changeColor2}></PopoverPicker>
                        <HexColorInput className="symbolControl" color={color2} onChange={changeColor2}></HexColorInput>
                    </div>
                    <div>
                        <label>OffsetX</label>
                        <input name="input" type="number" defaultValue={props.offsetX} min={-50} max={50}
                            onChange={e => props.setSymbol({ ...props, offsetX: Number(e.currentTarget.value) })}>
                        </input>
                        <label>OffsetY</label>
                        <input name="input" type="number" defaultValue={props.offsetY} min={-50} max={50}
                            onChange={e => props.setSymbol({ ...props, offsetY: Number(e.currentTarget.value) })}></input>
                    </div>
                    <div>
                        <label>Symbol: </label>
                        <select defaultValue="SleekS" onChange={e => changeSymbolType(e)}>
                            <option value="SleekS">SleekS</option>
                            <option value="FatS">FatS</option>
                            <option value="StylishS">StylishS</option>
                            <option value="SharperStylishS">SharperStylishS</option>
                            <option value="OriginalS">OriginalS</option>
                            <option value="leaningOne">leaning 1</option>
                            <option value="stylish3">stylish3</option>
                            <option value="normal4">normal 4</option>
                            <option value="leaning4">leaning 4</option>
                            <option value="Stylish4">stylish 4</option>
                            <option value="Z">Z</option>
                        </select>
                    </div>
                </div>
            </>
        </div>
    )
}