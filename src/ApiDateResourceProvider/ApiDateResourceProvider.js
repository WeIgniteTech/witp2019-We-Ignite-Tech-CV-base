import * as React from 'react';
import { useEffect, useState } from 'react';

const d= new Date();
console.log(d)
const datefull=d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear()
const defaultDateResource = {today: datefull};
export const DateResourceContext = React.createContext(defaultDateResource);

const ApiDateResourceProvider = (props) => {
    const [dateResourceState, setDateResourceState] = useState(
            defaultDateResource
    );

    useEffect(() => {
        fetch('/api/now')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(response => response.json())
            .then(json => {
                setDateResourceState(json);
                console.log('Got following JSON: ', json);
            })
            .catch(console.log);
    }, [setDateResourceState]);

    return (
        <DateResourceContext.Provider value={dateResourceState}>
            {props.children}
        </DateResourceContext.Provider>
    );
};

export default ApiDateResourceProvider;
