function C4(){
    const names=["Raj","Rahul","Steve","Nancy","Eleven"];
    const ListName=()=>{
        return names.map((val,ind)=>{
            return <li key={ind}>{val}</li>
        })
    }
    return(
        <div>
            <ol type="a">
                {ListName()}
            </ol>
        </div>
    )
}
export default C4;