import {createContext,useContext,useState,useEffect} from 'react';


const TextContext = createContext();

export const TextProvider = function({children}) {
    const [text, setText] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme',text);
    },[text])

    return (
        <TextContext.Provider value={{text, setText}}>
            {children}
        </TextContext.Provider>
    );
};


export const TextProviderFunction = function() {
    return useContext(TextContext);
}

export default TextContext
