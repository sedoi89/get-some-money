import React, {useState} from 'react';

const Xchange = (props) => {
    console.log(props);


    const checkSumm = function () {
if (props.props[1].nominal > props.props[0].nominal) {
    props.props[0].Value = props.props[1].Value
}
    }

    return (
        <>
            <div>
                <label htmlFor={'change'}>Меняю
                <input type={"text"} id={'change'} value={props.props[1].value}/>
                    {props.props[0].name}
                </label>
            </div>

            <div>
                <label htmlFor={'get'}>Получу
                <input type={"text"} id={'get'} value={props.props[1].nominal}/>
                    {props.props[1].name}
                </label>
            </div>
        </>
    );
};

export default Xchange;
