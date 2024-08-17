import { nanoid } from "nanoid"
import React, { useState } from "react"
import { HexColorInput } from "react-colorful"
import { PopoverPicker } from "./PopoverPicker"
import { Emblem, SVGIconProps } from "./SVGIconSpace"
import { defaultSymbolConf, symbolConfig, SymbolControlls } from "./SymbolControlls"

export interface controllerProps {
    setSVGProps: (param: SVGIconProps) => void
    svgProps: SVGIconProps
}

export const Controls = (props: controllerProps) => {

    const [bgColor1, setBgColor1] = useState(props.svgProps.bgColor1);
    const [bgColor2, setBgColor2] = useState(props.svgProps.bgColor2);

    const [cornerColor1, setCornerColor1] = useState(props.svgProps.cornerCol1);
    const [cornerColor2, setCornerColor2] = useState(props.svgProps.cornerCol2);

    const [stripesColor1, setStripesColor1] = useState(props.svgProps.stripesCol1);
    const [stripesColor2, setStripesColor2] = useState(props.svgProps.stripesCol2);

    const [emblemColor1, setEmblemColor1] = useState(props.svgProps.EmblemCol1);
    const [emblemColor2, setEmblemColor2] = useState(props.svgProps.EmblemCol2);

    const [symbolConfigs, setSymbolConfigs] = useState<symbolConfig[]>(props.svgProps.symbolConfig);

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
            case "Emblem": emblem = Emblem.Emblem; break;
            case "EmblemCrown": emblem = Emblem.EmblemCrown; break;
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

    const setSymbolConfig = (sym: symbolConfig) => {

        const newSymbolConfig = symbolConfigs.slice(0);

        newSymbolConfig.forEach(s => {
            if (s.id != sym.id) return
            s.color1 = sym.color1;
            s.color2 = sym.color2;
            s.offsetX = sym.offsetX;
            s.offsetY = sym.offsetY;
            s.flip = sym.flip;
            s.svg_path = sym.svg_path;
        });

        props.setSVGProps({ ...props.svgProps, symbolConfig: newSymbolConfig });
    }

    const addNewSymbol = () => {

        const newSymbolConf = props.svgProps.symbolConfig.slice(0);
        newSymbolConf.push({ ...defaultSymbolConf, id: nanoid() });

        setSymbolConfigs(newSymbolConf);
        props.setSVGProps({ ...props.svgProps, symbolConfig: newSymbolConf });
    }

    const deleteSymbol = (sym: symbolConfig) => {

        const newSymbolConf = props.svgProps.symbolConfig.slice(0);
        for (let i = newSymbolConf.length - 1; i >= 0; i--)
            if (newSymbolConf[i].id == sym.id)
                newSymbolConf.splice(i, 1);

        setSymbolConfigs(newSymbolConf);
        props.setSVGProps({ ...props.svgProps, symbolConfig: newSymbolConf });
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
        setSymbolConfigs(conf.symbolConfig);
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
                                <PopoverPicker color={bgColor1} onChange={changeBGColor1}></PopoverPicker>
                                <HexColorInput color={bgColor1} onChange={changeBGColor1}></HexColorInput>
                            </div>
                            <div>
                                <PopoverPicker color={bgColor2} onChange={changeBGColor2}></PopoverPicker>
                                <HexColorInput color={bgColor2} onChange={changeBGColor2}></HexColorInput>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        <div style={{ paddingRight: "20px" }}>Corner:</div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <PopoverPicker color={cornerColor1} onChange={changeCornerColor1}></PopoverPicker>
                                <HexColorInput color={cornerColor1} onChange={changeCornerColor1}></HexColorInput>
                            </div>
                            <div>
                                <PopoverPicker color={cornerColor2} onChange={changeCornerColor2}></PopoverPicker>
                                <HexColorInput color={cornerColor2} onChange={changeCornerColor2}></HexColorInput>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        Stripes:
                        <div style={{ display: "flex" }}>
                            <div>
                                <PopoverPicker color={stripesColor1} onChange={changeStripesColor1}></PopoverPicker>
                                <HexColorInput color={stripesColor1} onChange={changeStripesColor1}></HexColorInput>
                            </div>
                            <div>
                                <PopoverPicker color={stripesColor2} onChange={changeStripesColor2}></PopoverPicker>
                                <HexColorInput color={stripesColor2} onChange={changeStripesColor2}></HexColorInput>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        Emblem:
                        <div style={{ display: "flex" }}>
                            <div>
                                <PopoverPicker color={emblemColor1} onChange={changeEmblemColor1}></PopoverPicker>
                                <HexColorInput color={emblemColor1} onChange={changeEmblemColor1}></HexColorInput>
                            </div>
                            <div>
                                <PopoverPicker color={emblemColor2} onChange={changeEmblemColor2}></PopoverPicker>
                                <HexColorInput color={emblemColor2} onChange={changeEmblemColor2}></HexColorInput>
                            </div>
                        </div>
                        <select style={{ width: "80%", marginLeft: "0.5rem", marginTop: "0.5rem" }}
                            onChange={e => changeEmblem(e)} defaultValue="Star">
                            <option value="Circle">Circle</option>
                            <option value="Inv_Tri">Inverted Triangle</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Double_Diamond">Double Diamond</option>
                            <option value="Star">Star</option>
                            <option value="TriCircle">TriCircle</option>
                            <option value="DoubleTriangle">DoubleTriangle</option>
                            <option value="Emblem">Emblem</option>
                            <option value="EmblemCrown">EmblemCrown</option>
                            <option value="NONE">None</option>
                        </select>
                        <div style={{ display: " flex", marginLeft: "0.5rem" }}>
                            <label>Override Background</label>
                            <input type="checkbox" defaultChecked={props.svgProps.EmblemOverrideBg} onChange={setEmblemOverride}></input>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "0.5rem" }}>
                        Symbol Config:
                        <button style={{ marginLeft: "0.5rem" }} onClick={addNewSymbol}>Add Symbol</button>
                    </div>
                    {symbolConfigs.map((sym: symbolConfig) => {
                        return <SymbolControlls {...sym} setSymbol={setSymbolConfig} deleteSymbol={deleteSymbol} key={sym.id}></SymbolControlls>
                    })}
                </div>
                <div style={{ paddingLeft: "2rem", }}>
                    <div style={{ display: "grid" }}>
                        QuickConfig
                        <textarea style={{ height: "70vh", width: "20rem" }}
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