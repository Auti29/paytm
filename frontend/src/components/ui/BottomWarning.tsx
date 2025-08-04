import {Link} from "react-router-dom"

interface warningProps {
    text: string, 
    linkText?: string, 
    url?: string
}

export default function BottomWarning({text, linkText, url}: warningProps) {
    return (
        <div className="flex text-gray-700">
                <h3>{text}</h3>
                <Link className="underline text-black ml-1" to={url!}>{linkText}</Link>
        </div>
    );
}