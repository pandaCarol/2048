import styled from "styled-components"
import { useSelector, useDispatchspatch } from "react-redux"
import { StartNewGame } from "../squares/btnNewGame"


const WinWrapping = styled.div`
    display: ${props => props.status === 'break' ? 'block' : 'none' };

    position: absolute;
    z-index: ${props => props.status === 'break' ? 2 : -1 };
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    margin: auto;
    padding: 1.5vw;
    max-width: min(550px, 30vw);
    min-width: min(550px, max(30vw, min(400px, max(240px, 70vw))));
    max-height: min(550px, 30vw);
    min-height: min(400px,max(240px, 70vw));
    background-color: rgba(250, 222, 0, 0.5);
    box-shadow: 0 0 36px #ffff00;
`
const Result = styled.h2`
    margin-top: 25%;
    text-align: center;

    font-size: ${document.documentElement.clientWidth > 425 ? '40px' : '30px'};
    color: #696969;
    word-spacing: 2vw;
`
const ButtonBar = styled.div`
    text-align: center;
    margin-top: 20%;
`
const ButtonItems = styled.button`
    font-size: ${ () => {
        let width = document.documentElement.clientWidth;
        if (width<425) {
            return ('12px');
        } else if (width < 768) {
            return('16px');
        } else if (width < 1024) {
            return ('18px');
        } else {
            return ('20px');
        }
    }     
    };
    margin: 6px;
    padding: 6px;
    border-radius: 0.2em;
    border: none;
    color: #f5f5f5;
    background-color: rgb(105 105 105);
    opacity: 0.8;

    :hover{
        opacity: 1;
        cursor: pointer;
    }
`

export const WinPage = () => {
    const state = useSelector(state => state.status)
    const curState = state[0].status

    return (
        <WinWrapping status={curState}>
            <Result>You Win</Result>
            <ButtonBar>
                <ButtonItems >Keep going</ButtonItems>
                <StartNewGame>Try again</StartNewGame>
            </ButtonBar>
            
        </WinWrapping>
    )
}