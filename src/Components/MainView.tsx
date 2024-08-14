import { useState } from "react";
import { Controlls } from "./Controlls";
import { Emblem, SVGIconProps, SVGIconSpace, Symbol } from "./SVGIconSpace";

export const MainView = () => {

    const [svgProps, setSvgProps] = useState<SVGIconProps>({
        bgColor1: "#ebba34",
        bgColor2: "#a87e0c",
        cornerCol1: "#b9f2ff",
        cornerCol2: "#1fb5d7",
        corners: 0,
        stripesCol1: "#7cdb7b",
        stripesCol2: "#14a812",
        stripes: 0,
        Emblem: Emblem.CIRCLE,
        EmblemCol1: "#b9f2ff",
        EmblemCol2: "#1fb5d7",
        Symbol: Symbol.SZ,
        SymbolCol1: "#e68787",
        SymbolCol2: "#cc0202"
    })

    return (
        <>
            <div style={{ display: "flex" }}>
                <div>
                    <div style={{ display: "flex" }}>
                        <SVGIconSpace {...svgProps} corners={1}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={2}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={3}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={4}></SVGIconSpace>
                    </div>
                    <div >
                        <SVGIconSpace {...svgProps} corners={1} stripes={1}></SVGIconSpace>
                        <SVGIconSpace  {...svgProps} corners={2} stripes={1}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={3} stripes={1}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={4} stripes={1}></SVGIconSpace>
                    </div>
                    <div >
                        <SVGIconSpace {...svgProps} corners={1} stripes={2}></SVGIconSpace>
                        <SVGIconSpace  {...svgProps} corners={2} stripes={2}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={3} stripes={2}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={4} stripes={2}></SVGIconSpace>
                    </div>
                    <div >
                        <SVGIconSpace {...svgProps} corners={1} stripes={3}></SVGIconSpace>
                        <SVGIconSpace  {...svgProps} corners={2} stripes={3}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={3} stripes={3}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={4} stripes={3}></SVGIconSpace>
                    </div>
                    <div >
                        <SVGIconSpace {...svgProps} corners={1} stripes={4}></SVGIconSpace>
                        <SVGIconSpace  {...svgProps} corners={2} stripes={4}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={3} stripes={4}></SVGIconSpace>
                        <SVGIconSpace {...svgProps} corners={4} stripes={4}></SVGIconSpace>
                    </div>
                </div>
                <div style={{ paddingLeft: "1rem" }}>
                    <Controlls setSVGProps={setSvgProps} svgProps={svgProps} ></Controlls>
                </div>
            </div>
        </>
    )
}