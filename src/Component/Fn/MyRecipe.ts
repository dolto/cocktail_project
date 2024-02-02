
const MyRecipeThem = (e:React.ChangeEvent<HTMLInputElement>
    ,set_src: React.Dispatch<React.SetStateAction<string | undefined>>)=>{
    set_src(e.currentTarget.value);
}

export {MyRecipeThem}