import { leaning4, leaning_One, normal4, path_Z, stylish3 } from "./SVGSymbolPaths"

export interface SVGIconProps {
    bgColor1: string,
    bgColor2: string,
    cornerCol1: string,
    cornerCol2: string,
    corners: number,
    stripesCol1: string,
    stripesCol2: string,
    stripes: number,
    Emblem: Emblem,
    EmblemCol1: string,
    EmblemCol2: string,
    EmblemOverrideBg: boolean,
    Symbol: Symbol,
    SymbolCol1: string,
    SymbolCol2: string,
    SType: string,
}

export enum Emblem {
    CIRCLE,
    INVERTED_TRIANGLE,
    Diamond,
    Double_Diamond,
    Star,
    DiamondStar,
    TriCircle,
    DoubleTriangle,
    NONE
}

export enum Symbol {
    S1,
    SZ,
    SS,
    S2Offset,
    S3,
    S3A,
    S3Roman,
    S4,
    S4A,
    NONE
}

export const SVGIconSpace = (props: SVGIconProps) => {

    return (
        <span >
            <svg viewBox="0 0 100 100" width={120} height={120}>
                <defs>
                    <linearGradient id="bgGradient" x1={0} x2={0} y1={0} y2={1}>
                        <stop stopColor={props.bgColor1} offset="0%"></stop>
                        <stop stopColor={props.bgColor2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="cornerGradient" x1={0} x2={1} y1={0} y2={1}>
                        <stop stopColor={props.cornerCol1} offset="0%"></stop>
                        <stop stopColor={props.cornerCol2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="stripesGradient" x1={0} x2={100} y1={0} y2={10} gradientUnits="userSpaceOnUse">
                        <stop stopColor={props.stripesCol1} offset="0%"></stop>
                        <stop stopColor={props.stripesCol2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="EmblemGradient" x1={0} x2={1} y1={0} y2={1}>
                        <stop stopColor={props.EmblemCol1} offset="0%"></stop>
                        <stop stopColor={props.EmblemCol2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="SymbolGradient" x1={0} x2={0} y1={0} y2={1}>
                        <stop stopColor={props.SymbolCol1} offset="0%"></stop>
                        <stop stopColor={props.SymbolCol2} offset="100%"></stop>
                    </linearGradient>
                </defs>
                <rect x={0} y={0} width="100%" height="100%" fill="url(#bgGradient)"></rect>
                {props.corners >= 1 ? <polygon points="0 75, 0 100, 25 100, 0" fill="url(#cornerGradient)" filter="drop-shadow(3px -2px 2px rgb(0 0 0 / 0.4))"></polygon> : <></>}
                {props.corners >= 2 ? <polygon points="100 75, 100 100, 75 100, 0" fill="url(#cornerGradient)" filter="drop-shadow(-2px -2px 2px rgb(0 0 0 / 0.4))"></polygon> : <></>}
                {props.corners >= 3 ? <polygon points="100 25, 100 0, 75 0, 0" fill="url(#cornerGradient)" filter="drop-shadow(2px 4px 2px rgb(0 0 0 / 0.4))"></polygon> : <></>}
                {props.corners >= 4 ? <polygon points="0 25, 0 0, 25 0, 0" fill="url(#cornerGradient)" filter="drop-shadow(1px 3px 2px rgb(0 0 0 / 0.4))"></polygon> : <></>}
                {props.stripes == 1 ?
                    <>
                        <line x1={0} x2={100} y1={50} y2={50} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                    </> : <></>}
                {props.stripes == 2 ?
                    <>
                        <line x1={0} x2={100} y1={46} y2={46} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={56} y2={56} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                    </>
                    : <></>}
                {props.stripes == 3 ?
                    <>
                        <line x1={0} x2={100} y1={40} y2={40} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={50} y2={50} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={60} y2={60} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                    </>
                    : <></>}
                {props.stripes == 4 ?
                    <>
                        <line x1={0} x2={100} y1={36} y2={36} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={46} y2={46} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={56} y2={56} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                        <line x1={0} x2={100} y1={66} y2={66} stroke="url(#stripesGradient)" strokeWidth={7} filter="drop-shadow(0px 5px 1px rgb(0 0 0 / 0.4))"></line>
                    </>
                    : <></>}
                {props.Emblem == Emblem.CIRCLE ? <>
                    {props.EmblemOverrideBg ? <circle cx={50} cy={50} r={33} fill="url(#bgGradient)"></circle> : <></>}
                    <circle cx={50} cy={50} r={33} fill="none" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></circle>
                </> : <></>}
                {props.Emblem == Emblem.INVERTED_TRIANGLE ? <>
                    {props.EmblemOverrideBg ? <polygon fill="url(#bgGradient)" points="50 20, 20 80, 80 80, 0" ></polygon> : <></>}
                    <polygon fill="none" points="50 20, 20 80, 80 80, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                </> : <></>}
                {props.Emblem == Emblem.Diamond ?
                    <>
                        {props.EmblemOverrideBg ? <polygon fill="url(#bgGradient)" points="50 20, 20 50, 50 80, 80 50, 0"></polygon> : <></>}
                        <polygon fill="none" points="50 20, 20 50, 50 80, 80 50, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                    </> :
                    <></>}
                {props.Emblem == Emblem.Double_Diamond ?
                    <>
                        <polygon fill="none" points="30 70, 30 30, 70 30, 70 70" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                        {props.EmblemOverrideBg ? <polygon fill="url(#bgGradient)" points="50 20, 20 50, 50 80, 80 50, 0"></polygon> : <></>}
                        <polygon fill="none" points="50 20, 20 50, 50 80, 80 50, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                    </> :
                    <></>}
                {props.Emblem == Emblem.Star ?
                    <>
                        {props.EmblemOverrideBg ? <polygon fill="url(#bgGradient)" points="50 20, 40 40, 20 30, 30 60, 25 80, 50 65, 75 80, 70 60, 80 30, 60 40"></polygon> : <></>}
                        <polygon fill="none" points="50 20, 40 40, 20 30, 30 60, 25 80, 50 65, 75 80, 70 60, 80 30, 60 40" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                    </> :
                    <></>}
                {props.Emblem == Emblem.DiamondStar ?
                    <>
                        {props.EmblemOverrideBg ? <polygon fill="url(#bgGradient)" points="50 20, 40 40, 20 30, 30 60, 25 80, 50 65, 75 80, 70 60, 80 30, 60 40"></polygon> : <></>}
                        <polygon fill="none" points="50 20, 20 50, 50 80, 80 50, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                        <polygon fill="none" points="50 20, 40 40, 20 30, 30 60, 25 80, 50 65, 75 80, 70 60, 80 30, 60 40" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                    </> :
                    <></>}
                {props.Emblem == Emblem.TriCircle ?
                    <>
                        {props.EmblemOverrideBg ?
                            <>
                                <circle cx={35} cy={35} r={20} fill="url(#bgGradient)" ></circle>
                                <circle cx={65} cy={35} r={20} fill="url(#bgGradient)" ></circle>
                                <circle cx={50} cy={65} r={20} fill="url(#bgGradient)"></circle>
                            </> : <></>}
                        <circle cx={35} cy={35} r={20} fill="none" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></circle>
                        <circle cx={65} cy={35} r={20} fill="none" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></circle>
                        <circle cx={50} cy={65} r={20} fill="none" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></circle>
                    </> :
                    <></>}
                {props.Emblem == Emblem.DoubleTriangle ? <>
                    {props.EmblemOverrideBg ?
                        <>
                            <polygon fill="url(#bgGradient)" points="50 20, 20 75, 80 75, 0" ></polygon>
                            <polygon fill="url(#bgGradient)" points="20 25, 50 80, 80 25, 0" ></polygon>
                        </> : <></>}
                    <polygon fill="none" points="50 20, 20 75, 80 75, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                    <polygon fill="none" points="20 25, 50 80, 80 25, 0" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></polygon>
                </> : <></>}
                {props.Symbol == Symbol.S1 ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(8 -4)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)" transform="translate(-10 4)"
                            d={leaning_One}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                        />
                    </> :
                    <></>}
                {props.Symbol == Symbol.SZ ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                            transform="translate(5)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)" transform="translate(-5 6)"
                            d={path_Z}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.SS ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(105), scale(-1, 1)" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.S2Offset ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                            transform="translate(8 -7)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(99 7), scale(-1, 1)" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.S3 ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(0 -10)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(30 -10)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(15 10)" />

                    </> :
                    <></>}
                {props.Symbol == Symbol.S3A ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
                            transform="translate(6)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={stylish3}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(0 8)" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.S3Roman ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(8 -5)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={leaning_One}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(-12 8)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={leaning_One}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(0 8)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={leaning_One}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(12 8)" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.S4 ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(4 2)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={leaning4}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(-4 -10)" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.S4A ?
                    <>
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={props.SType}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(2 0)" />
                        <path strokeWidth="4" fill="url(#SymbolGradient)"
                            d={normal4}
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(-2 -10)" />
                    </> :
                    <></>}
            </svg>
        </span>
    )
}