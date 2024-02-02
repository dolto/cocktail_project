const setAutoWordText = (arg: string, str:string): JSX.Element[] => {
    const text = arg.split(str);
    return text.map(
        (t, i)=>{
            if(i+1 === text.length){
                return(
                    <span key={i}>
                        {t}
                    </span>
                )
            }
            return(
                <span key={i}>
                    {t}<span className="lol">{str}</span>
                </span>
            )
        }
    )
}

export default setAutoWordText;