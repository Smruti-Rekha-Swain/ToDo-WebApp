interface DummyProp{
    name?:string;
    age:number;
}
export default function Dummy({name="Santosh",age}:DummyProp){
    return(
        <>
        {age + name}
        </>
    )
}