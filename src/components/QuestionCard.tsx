import React from "react";

type Props = {
    question : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNbr : number;
    totalQuestions : number;
}

const QuestionCard : React.FC<Props> = ({
                                            question,
                                            answers,
                                            callback,
                                            userAnswer,
                                            questionNbr,
                                            totalQuestions
}) => (
    <div>
        <p className="number">
            Questions : {questionNbr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html : answer}}/>
                    </button>
                </div>
            ))}
        </div>
    </div>);

export default QuestionCard;