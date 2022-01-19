import './App.css';
import {useState} from "react";
import classNames from "classnames";

const App = () => {

    const [colorMode, changeColorMode] = useState(false);
    const [invisibleMode, changeInvisibleMode] = useState(false);
    const [inscriptionExistence, changeInscriptionExistence] = useState(true);

    const toggleColorMode = () => {
        changeColorMode(!colorMode);
    }

    const toggleInvisibleMode = (event) => {
        event.preventDefault()
        changeInvisibleMode(!invisibleMode)
    }

    const toggleInscriptionExistence = (event) => {
        if (event.key === " ") {
            changeInscriptionExistence(!inscriptionExistence);
        }
    }

    return (
        <div className="App"
             onClick={toggleInvisibleMode}
             onContextMenu={toggleInvisibleMode}
             onKeyDown={toggleInscriptionExistence}
             tabIndex={'0'}
             >
            {inscriptionExistence
                ? <p onPointerEnter={toggleColorMode} onPointerLeave={toggleColorMode}
                className={classNames({"colorModeOn": colorMode}, {"invisibleModeOn": invisibleMode})}>
                Дмитрий Епихин <br/> Начинающий web-программист / Junior Frontend Developer</p>
                : <p/>}
        </div>
    );
}

export default App;
