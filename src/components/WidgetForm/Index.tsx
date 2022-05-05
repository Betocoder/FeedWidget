import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from "../../assets/Bug.svg"
import ideaImageUrl from "../../assets/Idea.svg"
import otherImageUrl from "../../assets/Thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";



export const feedBackTypes = {
    BUG: {
        title:'Problema',
        image: {
            source: bugImageUrl,
            alt:'imagem de um inseto'
        },
    },
    IDEA: {
        title:'Ideia',
        image: {
            source: ideaImageUrl ,
            alt: 'imagem de uma lâmpada'
        },
    },
    OTHER: {
        title:'Outro',
        image:{
            source: otherImageUrl,
            alt:'imagem de um balão de pensamento'
        },
    }
}

export type feedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {

    function handleRestartFeedBack() {
        setFeedBackSent(false)
        setFeedBackType(null)
    }
   
    const [feedBackType,setFeedBackType] = useState<feedBackType | null>()
    const [feedBackSent,setFeedBackSent] = useState(false)
    return(
    <div className="bg-zinc-900 p-4 relative text-white rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedBackSent ? (
            <FeedbackSuccessStep onFeedBackRestartRequested={handleRestartFeedBack}/>
        ) : (
            <>
            {!feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
              ) : 
              ( 
            <FeedBackContentStep 
            onFeedBackRestartRequested={handleRestartFeedBack}
            onFeedBackSent={()=> setFeedBackSent(true)}
            feedBackType={feedBackType}/>
         ) }
            </>
        )}
        
            <footer className="text-xs text-neutral-400">
            Feito com ♥<a className="underline underline-offset-2"href="https://rocketseat.com.br">Racketseat</a>
            </footer>
    </div>
    );
};

