import { type Dispatch, type SetStateAction } from "react";

interface inputProps {
    placeholder: string, 
    label: string, 
    inputId: string, 
    type: string, 
    setStateFunc: Dispatch<SetStateAction<string | null>>
}


export default function InputComponent(props: inputProps){
    return (
         <div className="flex flex-col">
            <label  className="mb-1 text-md font-bold" htmlFor={props.inputId}>{props.label}</label>
            <input 
            onChange={(e) => props.setStateFunc(e.target.value)}
            className="bg-white border border-slate-600 p-1.5 rounded-md text-lg w-[100%]" type={props.type}  name={props.inputId} id={props.inputId} placeholder={props.placeholder} />
            </div>
    );
}