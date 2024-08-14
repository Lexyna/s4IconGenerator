import React from "react"
import { SVGIconProps, Symbol } from "./SVGIconSpace"

export interface controllerProps {
    setSVGProps: (param: SVGIconProps) => void
    svgProps: SVGIconProps
}

export const Controlls = (props: controllerProps) => {

    const changeSymbol = (e: React.FormEvent<HTMLSelectElement>) => {

        let symbol = props.svgProps.Symbol;

        switch (e.currentTarget.value) {
            case "SS": symbol = Symbol.SS; break;
            case "SZ": symbol = Symbol.SZ; break;
            default: break;
        }


        props.setSVGProps({ ...props.svgProps, Symbol: symbol })
    }

    return (
        <>
            <div style={{ paddingLeft: "2rem", display: "block" }}>
                <div style={{ display: "grid" }}>
                    <div style={{ paddingRight: "20px" }}>Background:</div>
                    <input type="text" placeholder="bgColor#1"></input>
                    <input type="text" placeholder="bgColor#2"></input>
                </div>
                <div style={{ display: "grid" }}>
                    <div style={{ paddingRight: "20px" }}>Corner:</div>
                    <input type="text" placeholder="CornerColor#1"></input>
                    <input type="text" placeholder="CornerColor#2"></input>
                </div>
                <div style={{ display: "grid" }}>
                    Stripes:
                    <input type="text" placeholder="stripesColor#1"></input>
                    <input type="text" placeholder="stripesColor#2"></input>
                </div>
                <div style={{ display: "grid" }}>
                    Emblem:

                    <input type="text" placeholder="emblemColor#1"></input>
                    <input type="text" placeholder="emblemColor#2"></input>
                    <select>
                        <option value="Circle">Circle</option>
                    </select>
                </div>
                <div style={{ display: "grid" }}>
                    Symbol:

                    <input type="text" placeholder="symbolColor#1"></input>
                    <input type="text" placeholder="symbolColor#2"></input>
                    <select onChange={e => changeSymbol(e)}>
                        <option value="SZ">SZ</option>
                        <option value="SS">SS</option>
                    </select>
                </div>
            </div>
        </>
    )
}