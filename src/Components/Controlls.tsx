import React, { useState } from "react"
import { HexColorPicker } from "react-colorful"
import { SVGIconProps, Symbol } from "./SVGIconSpace"

export interface controllerProps {
    setSVGProps: (param: SVGIconProps) => void
    svgProps: SVGIconProps
}

export const Controlls = (props: controllerProps) => {

    const [bgColor1, setBgColor1] = useState(props.svgProps.bgColor1);
    const [bgColor2, setBgColor2] = useState(props.svgProps.bgColor2);

    const [cornerColor1, setCornerColor1] = useState(props.svgProps.cornerCol1);
    const [cornerColor2, setCornerColor2] = useState(props.svgProps.cornerCol2);

    const [stripesColor1, setStripesColor1] = useState(props.svgProps.stripesCol1);
    const [stripesColor2, setStripesColor2] = useState(props.svgProps.stripesCol2);

    const changeBGColor1 = (e: string) => {
        setBgColor1(e)
        props.setSVGProps({
            ...props.svgProps,
            bgColor1: e
        })
    }

    const changeBGColor2 = (e: string) => {
        setBgColor2(e)
        props.setSVGProps({
            ...props.svgProps,
            bgColor2: e
        })
    }

    const changeCornerColor1 = (e: string) => {
        setCornerColor1(e)
        props.setSVGProps({
            ...props.svgProps,
            cornerCol1: e
        })
    }

    const changeCornerColor2 = (e: string) => {
        setCornerColor2(e)
        props.setSVGProps({
            ...props.svgProps,
            cornerCol1: e
        })
    }

    const changeStripesColor1 = (e: string) => {
        setStripesColor1(e)
        props.setSVGProps({
            ...props.svgProps,
            stripesCol1: e
        })
    }

    const changeStripesColor2 = (e: string) => {
        setStripesColor2(e)
        props.setSVGProps({
            ...props.svgProps,
            stripesCol2: e
        })
    }

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
                    <div style={{ display: "flex" }}>
                        <HexColorPicker color={bgColor1} onChange={changeBGColor1}></HexColorPicker>
                        <HexColorPicker color={bgColor2} onChange={changeBGColor2}></HexColorPicker>
                    </div>
                </div>
                <div style={{ display: "grid" }}>
                    <div style={{ paddingRight: "20px" }}>Corner:</div>
                    <div style={{ display: "flex" }}>
                        <HexColorPicker color={cornerColor1} onChange={changeCornerColor1}></HexColorPicker>
                        <HexColorPicker color={cornerColor2} onChange={changeCornerColor2}></HexColorPicker>
                    </div>
                </div>
                <div style={{ display: "grid" }}>
                    Stripes:
                    <div style={{ display: "flex" }}>
                        <HexColorPicker color={stripesColor1} onChange={changeStripesColor1}></HexColorPicker>
                        <HexColorPicker color={stripesColor2} onChange={changeStripesColor2}></HexColorPicker>
                    </div>
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