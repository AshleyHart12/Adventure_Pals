import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
// import $ from 'jquery';
import Header from '../components/header/Header';
// import styled from 'styled-components';
import { PostButton } from '../components/buttons/Buttons';
import { ChooseActivity } from '../components/card/card';
// import { SearchBar } from '../components/input/Input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import db from '../components/services/PostService';
// import firebase from '../firebase';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const categorySelection = useRef(null);

    // const onDataChange = (items) => {
    //     let posts = [];
        
    //     items.forEach((item) => {
    //         let key = item.key;
    //         let data = item.val();
    //         posts.push({
    //             key: key,
    //             name: data.name,
    //             description: data.description,
    //             about: data.about,
    //             category: data.category
    //         });

    //     });
    //     setPosts(posts);
    // }

     useEffect(() => {
        db.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setPosts(data);
            // for (let post in posts) {
            //     console.log(individualData.id[post])
            // if (posts[post].category === 'hiking') {
            //     $('.activityCard').addClass('hiking')
            // } else if (posts[post].category === 'backpacking') {
            //     $('.activityCard').addClass('backpacking')
            // } else if (posts[post].category === 'climbing') {
            //     $('.activityCard').addClass('climbing')
            // }
        // }
        })

        categorySelection.current = 
        console.log(categorySelection);
     
        // PostService.getAll().on('value', onDataChange);

        // return () => {
        //     PostService.getAll().off('value', onDataChange);
        // }
    }, []) 


  const grabPostId = () => {

    for (let post in posts) {
        console.log(posts[post].id);
        // db.doc(posts[post].id)
}
    
//       const itemsRef = firebase.database().ref('posts');
//       itemsRef.on('value', (snapshot) => {
//           let items = snapshot.val();
//           console.log(items);
//       })
    }

    const showAllInCategory = () => {
        console.log()
        // if props.name == hiking, we need to show all database posts with the category hiking
    }

    return (
        <Container fluid className='text-center' id='container' style={{maxWidth: '1200px'}}>
            <Row>
                <Header />
            </Row>
            <Row>
                <PostButton />
            </Row>
            {/* <SearchBar /> */}
            <Row>
                {/* <ButtonOne onClick={ClickButton}>Browse All</ButtonOne> */}
            </Row>
            <Row className='justify-content-center'>
                <ChooseActivity name='Hiking' onClick={showAllInCategory} />
                <ChooseActivity name='Biking' onClick={showAllInCategory} />
                <ChooseActivity name='Climbing' onClick={showAllInCategory} />
                <ChooseActivity name='Trail Running' onClick={showAllInCategory} />
                <ChooseActivity name='Rafting' onClick={showAllInCategory} />
                <ChooseActivity name='Backpacking' onClick={showAllInCategory} />
                <ChooseActivity name='Ice Climbing' onClick={showAllInCategory} />
                <ChooseActivity name='Bike Brewery Tours' onClick={showAllInCategory} />
                <ChooseActivity name='Paragliding' onClick={showAllInCategory} />
                <ChooseActivity name='Other' onClick={showAllInCategory} />
            </Row>

           <Row className='justify-content-center'>
           {posts.map((post) => (
               <div style={{width: '12rem', height: '12rem', border: '1px solid black', display: 'inline-block', margin: '1rem'}} id='color' className='activityCard' onClick={grabPostId}>
               <h3>{post.name}</h3>
               <h6>{post.description}</h6>
               <h6>{post.category}</h6>
               </div>
           ))}
           </Row>

      </Container>
    )
}

export default Home;