import {React, useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {store} from "../store";
import {setChangedValute, setValute} from "../store/actions";
import arrows from '../../assets/icons/arrows.png'
import XchangeModule from "./xchange.module";
import {StyledXchangeArrowsContainer, StyledXchangeContainerDiv, StyledXchangeLabel, StyledXchangeDiv} from '../../assets/styled-components/xchange';


const Xchnge = (props) => {


    const takeStoreValute = useSelector(state => state.reducer.setValute);
    const takeStoreInitialValute = useSelector(state => state.reducer.initialValute);


    const [defaultState, setDefaultState] = useState('')
    const [getValuteSum, setGetValuteSum] = useState({value: ''})


    useEffect(() => {
        countProps()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    useEffect(() => {


        if (defaultState.value === '') {

            setGetValuteSum('0.00')
        } else {
            let sum = (defaultState / takeStoreValute.value * takeStoreInitialValute.value / takeStoreInitialValute.nominal * takeStoreValute.nominal).toFixed(2);

            setGetValuteSum({value: sum})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultState, takeStoreInitialValute]);


    function changeHandle(evt) {
        setDefaultState(evt.target.value)

    }


    function changeDirection() {


        let a = takeStoreInitialValute;
        let b = takeStoreValute
        let c = defaultState

        store.dispatch(setChangedValute(b))

        store.dispatch(setValute(a))

        setDefaultState(c)
        let sum = (defaultState / takeStoreValute.value * takeStoreInitialValute.value / takeStoreInitialValute.nominal * takeStoreValute.nominal).toFixed(2)
        setGetValuteSum({value: sum})

    }

    function countProps() {
        let sum = (defaultState / takeStoreValute.value * takeStoreInitialValute.value / takeStoreInitialValute.nominal * takeStoreValute.nominal).toFixed(2)
        setGetValuteSum({value: sum})
    }

    return (
        <StyledXchangeContainerDiv>
            <StyledXchangeDiv>
                <StyledXchangeLabel htmlFor={'change'}>
                    Меняю
                    <input type={"text"} id={'change'} onChange={changeHandle} value={defaultState.value}/>
                </StyledXchangeLabel>

                <XchangeModule props={takeStoreInitialValute.charCode}/>

            </StyledXchangeDiv>
            <StyledXchangeArrowsContainer>
                <img style={{maxWidth: '60px', maxHeight: '100px'}}
                     onClick={changeDirection}
                     src={arrows}
                     alt={'arrows'}/></StyledXchangeArrowsContainer>
            <StyledXchangeDiv>
                <StyledXchangeLabel htmlFor={'get'}>
                    Получу
                    <input
                        disabled={true}
                        type={"text"}
                        id={'get'}
                        value={getValuteSum.value}/>
                </StyledXchangeLabel>
                <span>{takeStoreValute.name}</span>
            </StyledXchangeDiv>
        </StyledXchangeContainerDiv>
    );
};

export default Xchnge;
