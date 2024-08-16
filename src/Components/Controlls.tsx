import React, { useState } from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"
import { Emblem, SVGIconProps, Symbol } from "./SVGIconSpace"
import { FatS, path_originalS, path_S4S, path_s4SSharp, SleekS } from "./SVGSymbolPaths"

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
            cornerCol2: e
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
            case "Double_Diamond": emblem = Emblem.Double_Diamond; break;
            case "Star": emblem = Emblem.Star; break;
            case "DiamondStar": emblem = Emblem.DiamondStar; break;
            case "TriCircle": emblem = Emblem.TriCircle; break;
            case "DoubleTriangle": emblem = Emblem.DoubleTriangle; break;
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
            case "S1": symbol = Symbol.S1; break;
            case "SS": symbol = Symbol.SS; break;
            case "SZ": symbol = Symbol.SZ; break;
            case "S2Offset": symbol = Symbol.S2Offset; break;
            case "S3": symbol = Symbol.S3; break;
            case "S3A": symbol = Symbol.S3A; break;
            case "S3R": symbol = Symbol.S3Roman; break;
            case "S4": symbol = Symbol.S4; break;
            case "S4A": symbol = Symbol.S4A; break;
            case "NONE": symbol = Symbol.NONE; break;
            default: break;
        }

        props.setSVGProps({ ...props.svgProps, Symbol: symbol })
    }

    const changeSType = (e: React.FormEvent<HTMLSelectElement>) => {

        let sType = props.svgProps.SType;

        switch (e.currentTarget.value) {
            case "OriginalS": sType = path_originalS; break
            case "StylishS": sType = path_S4S; break
            case "StylishSSharp": sType = path_s4SSharp; break;
            case "FatS": sType = FatS; break;
            case "SleekS": sType = SleekS; break;
            default: break;
        }

        props.setSVGProps({ ...props.svgProps, SType: sType })
    }

    const loadQuickConfig = async () => {

        const quickConfig: string = await navigator.clipboard.readText();

        const conf: SVGIconProps = JSON.parse(quickConfig);

        setBgColor1(conf.bgColor1)
        setBgColor2(conf.bgColor2)
        setCornerColor1(conf.cornerCol1)
        setCornerColor2(conf.cornerCol2)
        setStripesColor1(conf.stripesCol1)
        setStripesColor1(conf.stripesCol2)
        setEmblemColor1(conf.stripesCol1)
        setEmblemColor2(conf.EmblemCol2)
        setSymbolColor1(conf.SymbolCol1)
        setSymbolColor2(conf.stripesCol2)
        props.setSVGProps({ ...conf })
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
                                <HexColorInput color={bgColor1} onChange={changeBGColor1}></HexColorInput>
                            </div>
                            <div>
                                <HexColorPicker color={bgColor2} onChange={changeBGColor2}></HexColorPicker>
                                <HexColorInput color={bgColor2} onChange={changeBGColor2}></HexColorInput>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        <div style={{ paddingRight: "20px" }}>Corner:</div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={cornerColor1} onChange={changeCornerColor1}></HexColorPicker>
                                <HexColorInput color={cornerColor1} onChange={changeCornerColor1}></HexColorInput>
                            </div>
                            <div>
                                <HexColorPicker color={cornerColor2} onChange={changeCornerColor2}></HexColorPicker>
                                <HexColorInput color={cornerColor2} onChange={changeCornerColor2}></HexColorInput>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        Stripes:
                        <div style={{ display: "flex" }}>
                            <div>
                                <HexColorPicker color={stripesColor1} onChange={changeStripesColor1}></HexColorPicker>
                                <HexColorInput color={stripesColor1} onChange={changeStripesColor1}></HexColorInput>
                            </div>
                            <div>
                                <HexColorPicker color={stripesColor2} onChange={changeStripesColor2}></HexColorPicker>
                                <HexColorInput color={stripesColor2} onChange={changeStripesColor2}></HexColorInput>
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
                                <HexColorInput color={emblemColor1} onChange={changeEmblemColor1}></HexColorInput>
                            </div>
                            <div>
                                <HexColorPicker color={emblemColor2} onChange={changeEmblemColor2}></HexColorPicker>
                                <HexColorInput color={emblemColor2} onChange={changeEmblemColor2}></HexColorInput>
                            </div>
                        </div>
                        <select onChange={e => changeEmblem(e)} defaultValue="Star">
                            <option value="Circle">Circle</option>
                            <option value="Inv_Tri">Inverted Triangle</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Double_Diamond">Double Diamond</option>
                            <option value="Star">Star</option>
                            <option value="TriCircle">TriCircle</option>
                            <option value="DoubleTriangle">DoubleTriangle</option>
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
                                <HexColorInput color={symbolColor1} onChange={changeSymbolColor1}></HexColorInput>

                            </div>
                            <div>
                                <HexColorPicker color={symbolColor2} onChange={changeSymbolColor2}></HexColorPicker>
                                <HexColorInput color={symbolColor2} onChange={changeSymbolColor2}></HexColorInput>
                            </div>
                        </div>
                        <select onChange={e => changeSymbol(e)} defaultValue="S4">
                            <option value="S1">S1</option>
                            <option value="SZ">SZ</option>
                            <option value="SS">S2</option>
                            <option value="S2Offset">S2 Offset</option>
                            <option value="S3">S3</option>
                            <option value="S3A">S3 Alternative</option>
                            <option value="S3R">S3 Roman</option>
                            <option value="S4">S4</option>
                            <option value="S4A">S4 Alternative</option>
                            <option value="NONE">NONE</option>
                        </select>
                    </div>
                    <div style={{ display: "grid" }}>
                        S-Type
                        <select onChange={e => changeSType(e)} defaultValue="StylishS">
                            <option value="StylishS">Stylish S</option>
                            <option value="StylishSSharp">Stylish S Sharp</option>
                            <option value="OriginalS">Original S</option>
                            <option value="FatS">Fat S</option>
                            <option value="SleekS">Sleek S</option>
                        </select>
                    </div>
                </div>
                <div style={{ paddingLeft: "2rem", }}>
                    <div style={{ display: "grid" }}>
                        QuickConfig
                        <textarea style={{ height: "20rem", width: "20rem" }}
                            value={SVGPropsToString(props.svgProps)}
                            readOnly
                        ></textarea>
                        <button style={{ backgroundColor: "gray" }} onClick={loadQuickConfig}>Import/Paste</button>
                    </div>
                </div>
            </div >
        </>
    )
}

const SVGPropsToString = (val: SVGIconProps) => {

    const quickConfig: string = JSON.stringify(val, null, "\t").replace(
        "],\n\t\"",
        "],\n\n\t\""
    );;

    return quickConfig;
}