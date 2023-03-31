
import { useParams } from 'react-router-dom';
const Colors = () => {
    const {word,bgColor,textColor} = useParams();
    if(isNaN(word)){{/*Meaning is not a number*/}
        return (
            <div style={{ backgroundColor: bgColor, color: textColor }}>
            <h1>The word is: {word} </h1>
            </div>
        )
    }

    
return (
        <div style={{ backgroundColor: "green", color: "red" }}>{/*styling the route */}
            <h1>Is not a word: {word} </h1>
        </div>
    );
}
export default Colors;