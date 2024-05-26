import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
    border-width: 0.5rem;
    border-style: solid;
    border-color: #44c7a9 #33e7bc #50e3cd #3db090;
    width: 3.625rem;
    height: 3.625rem;
    border-radius: 50%;
    position: relative;
    -webkit-animation: spin 2s infinite;
    animation: spin 2s infinite;

    &:before,
    &:after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #54eecf;
        position: absolute;
        left: 0.125rem;
    }

    &:before {
        top: 0.063rem;
    }

    &:after {
        bottom: 0.063rem;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;

//Create functional component
export function LoadingSpinner() {

    return (
        <Container>
            <Loader />
        </Container>
    );

}
