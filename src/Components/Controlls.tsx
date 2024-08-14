export const Controlls = () => {

    return (
        <>
            <div style={{ paddingLeft: "2rem" }}>
                <div style={{ display: "flex" }}>
                    Background:
                    <input type="text" placeholder="bgColor#1"></input>
                    <input type="text" placeholder="bgColor#2"></input>
                </div>
                <div style={{ display: "flex" }}>
                    Corner:
                    <input type="text" placeholder="CornerColor#1"></input>
                    <input type="text" placeholder="CornerColor#2"></input>
                </div>
                <div style={{ display: "flex" }}>
                    Stripes:
                    <input type="text" placeholder="stripesColor#1"></input>
                    <input type="text" placeholder="stripesColor#2"></input>
                </div>
                <div style={{ display: "flex" }}>
                    Emblem:
                    <select>
                        <option value="Circle">Circle</option>
                    </select>
                    <input type="text" placeholder="emblemColor#1"></input>
                    <input type="text" placeholder="emblemColor#2"></input>
                </div>
                <div style={{ display: "flex" }}>
                    Symbol:
                    <select>
                        <option value="SZ">SZ</option>
                    </select>
                    <input type="text" placeholder="symbolColor#1"></input>
                    <input type="text" placeholder="symbolColor#2"></input>
                </div>
            </div>
        </>
    )
}