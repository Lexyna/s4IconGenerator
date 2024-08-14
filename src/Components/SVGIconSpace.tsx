
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
    EmblemCol2: string
    Symbol: Symbol,
    SymbolCol1: string,
    SymbolCol2: string
}

export enum Emblem {
    CIRCLE
}

export enum Symbol {
    SZ,
    SS
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
                    <linearGradient id="stripesGradient" x1={0} x2={1} y1={0} y2={0} gradientUnits="userSpaceOnUse">
                        <stop stopColor={props.stripesCol1} offset="0%"></stop>
                        <stop stopColor={props.stripesCol2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="EmblemGradient" x1={0} x2={1} y1={0} y2={1} gradientUnits="userSpaceOnUse">
                        <stop stopColor={props.EmblemCol1} offset="0%"></stop>
                        <stop stopColor={props.EmblemCol2} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="SymbolGradient" x1={0} x2={0} y1={0} y2={1} gradientUnits="userSpaceOnUse">
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
                        <line x1={0} x2={100} y1={50} y2={50} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={54} y2={54} stroke="black" strokeWidth={2}></line>
                    </> : <></>}
                {props.stripes == 2 ?
                    <>
                        <line x1={0} x2={100} y1={46} y2={46} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={50} y2={50} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={56} y2={56} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={60} y2={60} stroke="black" strokeWidth={2}></line>
                    </>
                    : <></>}
                {props.stripes == 3 ?
                    <>
                        <line x1={0} x2={100} y1={40} y2={40} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={44} y2={44} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={50} y2={50} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={54} y2={54} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={60} y2={60} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={64} y2={64} stroke="black" strokeWidth={2}></line>
                    </>
                    : <></>}
                {props.stripes == 4 ?
                    <>
                        <line x1={0} x2={100} y1={36} y2={36} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={40} y2={40} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={46} y2={46} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={50} y2={50} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={56} y2={56} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={60} y2={60} stroke="black" strokeWidth={2}></line>
                        <line x1={0} x2={100} y1={66} y2={66} stroke="url(#stripesGradient)" strokeWidth={7}></line>
                        <line x1={0} x2={100} y1={70} y2={70} stroke="black" strokeWidth={2}></line>
                    </>
                    : <></>}
                {props.Emblem == Emblem.CIRCLE ? <>
                    <circle cx={50} cy={50} r={33} fill="url(#bgGradient)"></circle>
                    <circle cx={50} cy={50} r={33} fill="none" stroke="url(#EmblemGradient)" strokeWidth={5} filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"></circle>
                </> : <></>}
                {props.Symbol == Symbol.SZ ?
                    <>
                        <path stroke-width="4" fill="url(#SymbolGradient)"
                            d="m 50 30 Q 17 39 50 50 Q 58 82 20 80 L 20 70 A 1 0.5 0 0 0 20 50 Q 18 18 50 20 L 50 30"
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" />
                        <path stroke-width="4" fill="url(#SymbolGradient)" transform="translate(1)"
                            d="m 50 20 L 80 20 L 80 25 L 60 70 L 80 70 L 80 80 L 50 80 L 50 70 L 67 30 L 50 30 L 50 20"
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" />
                    </> :
                    <></>}
                {props.Symbol == Symbol.SS ?
                    <>
                        <path stroke-width="4" fill="url(#SymbolGradient)"
                            d="m 50 30 Q 17 39 50 50 Q 58 82 20 80 L 20 70 A 1 0.5 0 0 0 20 50 Q 18 18 50 20 L 50 30"
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" />
                        <path stroke-width="4" fill="url(#SymbolGradient)"
                            d="m 50 30 Q 17 39 50 50 Q 58 82 20 80 L 20 70 A 1 0.5 0 0 0 20 50 Q 18 18 50 20 L 50 30"
                            filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" transform="translate(105), scale(-1, 1)" />
                    </> :
                    <></>}
            </svg>
        </span>
    )
}