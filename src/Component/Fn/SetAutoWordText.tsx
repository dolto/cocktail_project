const setAutoWordText = (arg: string, str:string): JSX.Element[] => {
    const text = arg.split(str);
    return text.map(
        (t, i)=>{
            if(i+1 === text.length){
                return(
                    <>
                        {t}
                    </>
                )
            }
            return(
                <>
                    {t}<span className="lol">{str}</span>
                </>
            )
        }
    )
}

export default setAutoWordText;