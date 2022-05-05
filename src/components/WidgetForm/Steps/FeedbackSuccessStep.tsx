import { CloseButton } from "../../CloseButton";
import cptImgUrl from "../../../assets/Success.svg"

interface feedbackSuccessStepProps {
    onFeedBackRestartRequested: () => void;
}
export function FeedbackSuccessStep({onFeedBackRestartRequested}:feedbackSuccessStepProps) {
    return (
        <>
        <header>
            <CloseButton/>
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={cptImgUrl} alt='imagem de capitche' />
            <span className="text-xl mt-2">Agradecemos o feedback</span>
            <button
            onClick={onFeedBackRestartRequested}
            className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zing-700 tansition-colors focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc focus: ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >Novo feedback</button>
        </div>
        </>
    )
}