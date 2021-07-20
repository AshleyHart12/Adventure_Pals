import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MakePostButton = styled.button `
    background-color: yellow;
    padding: .5rem;
    width: 40%;
    cursor: pointer;
`

const GoHomeButton = styled.button `
    background-color: lightblue;
    color: white;
    padding: .5rem;
    width: 30%;
    cursor: pointer;
`

// function makePost(e) {
//     e.preventDefault();
//     alert('clicked');
// }

export const PostButton = () => {
    return (
        <div>
        <Link to='/post'>
            <MakePostButton>Make a post</MakePostButton>
        </Link>
        </div>
    )
}

export const HomeButton = () => {
    return (
        <Link to='/'>
            <GoHomeButton>Go Home</GoHomeButton>
        </Link>
    )
}

