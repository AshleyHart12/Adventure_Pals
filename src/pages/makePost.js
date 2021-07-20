import React, { useEffect } from 'react';
import {HomeButton} from '../components/buttons/Buttons';
import { PostForm } from '../components/input/Input';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const MakePost = () => {


    useEffect(() => {
        // send HTTP request
        // save response to variable
    }, [])

    // When a user clicks submit - pop up modal say thanks for posting! and takes them to home page --- Show card on home page 
        // eventually, show a preview of the post, decide yes or edit. When yes, take them to posting

    return (
        <Container fluid className='text-center w-75'>
            <h1>POST PAGE</h1>
            <HomeButton />
            <PostForm />
        </Container>
    )
}

export default MakePost;