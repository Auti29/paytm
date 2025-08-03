
interface inputProps {
    placeholder: string, 
    label: string, 
    inputId: string, 
}


export default function InputComponent(props: inputProps){
    return (
         <div className="flex flex-col">
            <label  className="mb-1 text-md font-bold" htmlFor={props.inputId}>{props.label}</label>
            <input className="bg-white border border-slate-600 p-1.5 rounded-md text-lg w-[100%]" name={props.inputId} id={props.inputId} placeholder={props.placeholder} />
            </div>
    );
}