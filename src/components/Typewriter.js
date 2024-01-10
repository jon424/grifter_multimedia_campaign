import useTypewriter from "../hooks/useTypewriter";

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p className="repeated-word">{ displayText }</p>;
};

export default Typewriter;