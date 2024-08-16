import { useState } from "react";
import { Controls } from "./Controls";
import { Emblem, SVGIconProps, SVGIconSpace } from "./SVGIconSpace";
import { path_S4S } from "./SVGSymbolPaths";
import { defaultSymbolConf } from "./SymbolControlls";

export const MainView = () => {

    const [svgProps, setSvgProps] = useState<SVGIconProps>({
        bgColor1: "#4d4d4d",
        bgColor2: "#000000",
        cornerCol1: "#e0a41f",
        cornerCol2: "#8a6412",
        stripesCol1: "#e0a41f",
        stripesCol2: "#8a6412",
        Emblem: Emblem.Star,
        EmblemCol1: "#e0a41f",
        EmblemCol2: "#8a6412",
        EmblemOverrideBg: true,
        SType: path_S4S,
        symbolConfig: [defaultSymbolConf]
    })

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ paddingTop: "1.5rem" }}>
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
                    <Controls setSVGProps={setSvgProps} svgProps={svgProps} ></Controls>
                </div>
            </div >
        </>
    )
}