
interface buttonProps {
    text: string,
    onClickFunc: () => void
}

export default function AuthButtonComponent(props: buttonProps) {
    return (
        <div className="w-full flex items-center justify-center">
                <button onClick={props.onClickFunc} className="cursor-pointer border border-gray-800 w-[90%] p-2 m-4 rounded-md font-bold text-lg bg-gray-800 text-white">{props.text}</button>
            </div>
    );
}