import { useState } from 'react';

function UseStateComp(props) {
    let { contents } = props;

    const [ count, setCount ] = useState(0);
    return (
        <div>
            <h3>{ contents }</h3>
            <p>현재 카운트: { count } 입니다.</p>
        </div>
    )
}

export default UseStateComp;