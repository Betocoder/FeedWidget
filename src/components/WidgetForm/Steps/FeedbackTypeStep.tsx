import { CloseButton } from "../../CloseButton";
import { feedBackType, feedBackTypes } from "../Index"

interface feedBackTypeStepProps {
    onFeedbackTypeChanged: (type: feedBackType) => void;
    
}
export function FeedbackTypeStep({onFeedbackTypeChanged}: feedBackTypeStepProps) {
    return(
        <>
        <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseButton/>
        </header>

        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key,value]) =>{
            return ( 
                <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 hover:boder-brand-500 focus: border-brand-500 focus: outline-none"
                onClick={() => onFeedbackTypeChanged(key as feedBackType)}
                >
                <img src={value.image.source} alt={value.image.alt}/> 
                <span>{value.title }</span>
            </button>
                )
                
                
            })}
        </div>
            </>
    )
};