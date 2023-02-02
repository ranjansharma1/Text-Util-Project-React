import ColorContext from "./colorContext";

const ColorState=(props)=>{
    const s1={
        "name":"ranjan",
        "class":"a1"
    }

    return(
        <ColorContext.Provider value={s1}>
            {props.children}
        </ColorContext.Provider>
    )

}

export default ColorState;