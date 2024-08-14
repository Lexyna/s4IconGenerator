import React, { useState } from "react"
import { HexColorPicker } from "react-colorful"
import { Emblem, SVGIconProps, Symbol } from "./SVGIconSpace"

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

    const [emblemColor1, setEmblemColor1] = useState(props.svgProps.EmblemCol1);
    const [emblemColor2, setEmblemColor2] = useState(props.svgProps.EmblemCol2);

    const [symbolColor1, setSymbolColor1] = useState(props.svgProps.SymbolCol1);
    const [symbolColor2, setSymbolColor2] = useState(props.svgProps.SymbolCol2);


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

    const changeEmblemColor1 = (e: string) => {
        setEmblemColor1(e)
        props.setSVGProps({
            ...props.svgProps,
            EmblemCol1: e
        })
    }

    const changeEmblemColor2 = (e: string) => {
        setEmblemColor2(e)
        props.setSVGProps({
            ...props.svgProps,
            EmblemCol2: e
        })
    }

    const changeSymbolColor1 = (e: string) => {
        setSymbolColor1(e)
        props.setSVGProps({
            ...props.svgProps,
            SymbolCol1: e
        })
    }

    const changeSymbolColor2 = (e: string) => {
        setSymbolColor2(e)
        props.setSVGProps({
            ...props.svgProps,
            SymbolCol2: e
        })
    }

    const changeEmblem = (e: React.FormEvent<HTMLSelectElement>) => {

        let emblem = props.svgProps.Emblem;

        switch (e.currentTarget.value) {
            case "Circle": emblem = Emblem.CIRCLE; break;
            case "Inv_Tri": emblem = Emblem.INVERTED_TRIANGLE; break;
            case "Diamond": emblem = Emblem.Diamond; break;
            case "NONE": emblem = Emblem.NONE; break;
            default: break;
        }


        props.setSVGProps({ ...props.svgProps, Emblem: emblem })
    }

    const setEmblemOverride = () => {
        props.setSVGProps({
            ...props.svgProps,
            EmblemOverrideBg: !props.svgProps.EmblemOverrideBg
        })
    }

    const changeSymbol = (e: React.FormEvent<HTMLSelectElement>) => {

        let symbol = props.svgProps.Symbol;

        switch (e.currentTarget.value) {
            case "SS": symbol = Symbol.SS; break;
            case "SZ": symbol = Symbol.SZ; break;
            case "NONE": symbol = Symbol.NONE; break;
            default: break;
        }

        props.setSVGProps({ ...props.svgProps, Symbol: symbol })
    }

    return (
        <>
            <div style={{ paddingLeft: "0rem", marginRight: "0rem", display: "flex" }}>
                <div style={{ paddingRight: "2rem" }}>
                    <div style={{ display: "grid" }}>
                        <div style={{ paddingRight: "20px" }}>Background:</div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={bgColor1} onChange={changeBGColor1}></HexColorPicker>
                                <input type="text" value={bgColor1} onChange={e => changeBGColor1(e.currentTarget.value)}></input>
                            </div>
                            <div>
                                <HexColorPicker color={bgColor2} onChange={changeBGColor2}></HexColorPicker>
                                <input type="text" value={bgColor2} onChange={e => changeBGColor2(e.currentTarget.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        <div style={{ paddingRight: "20px" }}>Corner:</div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={cornerColor1} onChange={changeCornerColor1}></HexColorPicker>
                                <input type="text" value={cornerColor1} onChange={e => changeCornerColor1(e.currentTarget.value)}></input>
                            </div>
                            <div>
                                <HexColorPicker color={cornerColor2} onChange={changeCornerColor2}></HexColorPicker>
                                <input type="text" value={cornerColor2} onChange={e => changeCornerColor2(e.currentTarget.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        Stripes:
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={stripesColor1} onChange={changeStripesColor1}></HexColorPicker>
                                <input type="text" value={stripesColor1} onChange={e => changeStripesColor1(e.currentTarget.value)}></input>
                            </div>
                            <div>
                                <HexColorPicker color={stripesColor2} onChange={changeStripesColor2}></HexColorPicker>
                                <input type="text" value={stripesColor2} onChange={e => changeStripesColor2(e.currentTarget.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: "grid" }}>
                        Emblem:
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={emblemColor1} onChange={changeEmblemColor1}></HexColorPicker>
                                <input type="text" value={emblemColor1} onChange={e => changeEmblemColor1(e.currentTarget.value)}></input>
                            </div>
                            <div>
                                <HexColorPicker color={emblemColor2} onChange={changeEmblemColor2}></HexColorPicker>
                                <input type="text" value={emblemColor2} onChange={e => changeEmblemColor2(e.currentTarget.value)}></input>
                            </div>
                        </div>
                        <select onChange={e => changeEmblem(e)}>
                            <option value="Circle">Circle</option>
                            <option value="Inv_Tri">Inverted Triangle</option>
                            <option value="Diamond">Diamond</option>
                            <option value="NONE">None</option>
                        </select>
                        <div style={{ display: " flex" }}>
                            <label>Override Background</label>
                            <input type="checkbox" defaultChecked={props.svgProps.EmblemOverrideBg} onChange={setEmblemOverride}></input>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        Symbol:
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={symbolColor1} onChange={changeSymbolColor1}></HexColorPicker>
                                <input type="text" value={symbolColor1} onChange={e => changeSymbolColor1(e.currentTarget.value)}></input>
                            </div>
                            <div>
                                <HexColorPicker color={symbolColor2} onChange={changeSymbolColor2}></HexColorPicker>
                                <input type="text" value={symbolColor2} onChange={e => changeSymbolColor2(e.currentTarget.value)}></input>
                            </div>
                        </div>
                        <select onChange={e => changeSymbol(e)}>
                            <option value="SZ">SZ</option>
                            <option value="SS">SS</option>
                            <option value="NONE">NONE</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}