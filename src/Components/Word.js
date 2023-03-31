import { useParams } from 'react-router-dom';

const Word = (props) => {

    const { text } = useParams();
    if(isNaN(text)){
        return (
            <h1>The Word is: {text} </h1>
        )
    
    }
    
return (
        <div>
            <h1>The Number is: {text}</h1>
        </div>
    );
}
export default Word;