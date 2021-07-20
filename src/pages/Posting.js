import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Posting = () => {
    const [posts, setPosts] = useState([]);

    const onPageLoad = (items) => {
        let posts = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            posts.push({
                key: key,
                name: data.name,
                description: data.description,
                about: data.about,
                category: data.category
            })
        })
        setPosts(posts);
    }

    // useEffect(() => {
    //     PostService.getAll().on('value', onPageLoad);
    //     console.log(posts);
    // }, [])

    // const deletePost = () => {
    //     // allow user to delete post
    // }

    // const editPost = () => {
    //     // allow user to edit post
    // }

    return (
        <Container fluid className='text-center' style={{maxWidth: '1200px'}}>
            <Row className='justify-content-center'>
            {posts.map((post) => (
               <div style={{width: '12rem', height: '12rem', border: '1px solid black', display: 'inline-block', margin: '1rem'}} id='color' className='activityCard'>
               <h3>{post.name}</h3>
               <h6>{post.description}</h6>
               <h6>{post.about}</h6>
               </div>
                ))}
           </Row>
        </Container>
    )
} 

export default Posting;