import React from 'react';

const Module = (props) => {



    const check = function (value, previous) {
        if (value > previous) return  <td style={{color: "green"}}>▲</td>
        if (value < previous) return   <td style={{color: "red"}}>▼</td>
    }
    const checkPercents = function (value, prev) {
        const percents = value / prev;
        if (percents > 1) return <td style={{color: "green"}}>{percents.toFixed(4)}%</td>
        if (percents < 1) return <td style={{color: "red"}}>{percents.toFixed(4)}%</td>
    }
    return (
        <tr>
            <td >{props.props.CharCode}</td>
            <td aria-disabled={"true"}>{props.props.Nominal }</td>
            <td>{props.props.Name}</td>
            <td aria-disabled={"true"}>{props.props.Value.toFixed(2) }</td>
            {check(props.props.Value, props.props.Previous)}
            {checkPercents(props.props.Value, props.props.Previous)}
        </tr>
    );
};

export default Module;
