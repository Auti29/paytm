
interface buttonPropsI {
    text: string
}

export default function ButtonComponent(props: buttonPropsI) {
    return (
        <div>
            <button className="bg-gray-600 text-white pl-3 pr-3 pt-1.5 pb-1.5 rounded-md font-sans text-sm font-bold cursor-pointer">{props.text}</button>
        </div>
    ); 
}