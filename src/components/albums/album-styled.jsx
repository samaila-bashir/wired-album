import styled from "styled-components";

export const Albums = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, .1);
    border: 2px solid #f2f2f2;
    padding: 20px;
    border-radius: 4px;
    transition: all .3s ease;
    box-shadow: 0 0 3px rgba(0, 0, 0, .9);
    
    & > * {
        flex: 1 1 100%;
    }

    & > a {
        background: linear-gradient(-45deg,  #23A6D5, #23D5AB);
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        border: 1px solid black;
        padding: 15px 0;
        border-radius: 25px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    margin: 14px 0;
    font-size: 22px;
    text-align: center;
    letter-spacing: 1px;
    color: #f2f2f2;
`;
