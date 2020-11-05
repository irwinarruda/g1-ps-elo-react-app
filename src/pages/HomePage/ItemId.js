import React from 'react';
import ItemRender from './ItemRender';
import './styles.css';

const ItemId = ({array}) => { 
    const [scrollX, setScrollX] = React.useState(0);

    function handleClick1() {
        let incremento = Math.round(window.innerWidth / 3)
        if (scrollX + incremento >= 0) {
            setScrollX(0);
        } else {
            setScrollX(scrollX + incremento);
        }
    }

    function handleClick2() {
        let decremento = Math.round(window.innerWidth / 3);
        let tamanhoLista = array.length * 150 + array.length * 30;
        if (window.innerWidth - tamanhoLista > scrollX - decremento) {
            if(tamanhoLista >= window.innerWidth) {
                setScrollX(window.innerWidth - tamanhoLista - 30); 
            }   
        } else {
            setScrollX(scrollX - decremento);
        }
    }
    return (
        <>
            <div className="home-filme-container" style={{ transform: "translateX(" + scrollX + "px)" }}>
                {array.map((item) => {
                    return <React.Fragment key={item}>
                        <ItemRender item={item}/>
                    </React.Fragment>
                })}
            </div>
            <div className="home-btn-container">
                <button onClick={handleClick1}>{"<<"}</button>
                <button onClick={handleClick2}>{">>"}</button>
            </div>
        </>
    );
}

export default ItemId;
