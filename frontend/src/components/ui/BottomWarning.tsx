
interface warningProps {
    text: string, 
    linkText?: string, 
    url?: string
}

export default function BottomWarning({text, linkText, url}: warningProps) {
    return (
        <div className="flex text-gray-700">
                <h3>{text}</h3>
                <a className="underline text-black ml-1" href={url}>{linkText}</a>
        </div>
    );
}