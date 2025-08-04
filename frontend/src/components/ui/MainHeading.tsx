

export default function MainHeading({text}: {text: string}){
    return (
        <div className="text-3xl font-bold m-2 text-gray-600">
            <h1>{text}</h1>
        </div>
    );
}