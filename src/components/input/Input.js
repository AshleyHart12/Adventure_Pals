import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownItem from 'react-bootstrap/DropdownItem';
import Dropdown from 'react-bootstrap/Dropdown';
import db from '../services/PostService';


const InputText = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    border: 2px solid palevioletred;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

  // HOME PAGE SEARCH BAR
  export const SearchBar = () => {
      return (
        <div>
            <InputText placeholder='Search an activity' 
            size='1rem' />
        </div>
      )
  }

// MAKE A POST FORM PAGE
export const PostForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState();
    const [userInfo, setUserInfo] = useState('');
    const [category, setCategory] = useState('');
    // const [key, setKey] = useState('');



    const submitForm = (e) => {
        e.preventDefault();
        db.add({name: name, description: description, about: userInfo, category: category})
        .then((ref) => {
            console.log(ref.id);
        });
        setName('');
        setDescription('');
        setRate();
        setUserInfo('');
        setCategory('');
    }

    // const setPostKey = (items) => { 
    //     items.forEach((item) => {
    //         setKey(item.key)
    //     })
    // }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeAbout = (e) => {
        setUserInfo(e.target.value);
    }

    const chooseCategory = (e) => {
       setCategory(e);
    }

    return (
        <>
        <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Activity Name</Form.Label>
                 <Form.Control type="text" placeholder="Activity Name"
                 value={name}
                 onChange={onChangeName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Activity Description</Form.Label>
                <Form.Control as="textarea" 
                placeholder='Activity description'
                rows={3} 
                value={description}
                onChange={onChangeDescription}
                />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>
                 <DropdownButton id="dropdown-basic-button" title='Choose a Category' onSelect={chooseCategory}>
                    <Dropdown.Item eventKey='Hiking'>Hiking</Dropdown.Item>
                    <Dropdown.Item eventKey='Backpacking'>Backpacking</Dropdown.Item>
                    <Dropdown.Item eventKey='Climbing'>Climbing</Dropdown.Item>
                    </DropdownButton>
                 </Form.Label>
                 <h1>Chosen Category: {category}</h1>
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Skill Level</Form.Label>
                <br/>
                <StarRatings
                rating={rate}
                starRatedColor="yellow"
                starHoverColor="pink"
                changeRating={setRate}
                numberOfStars={5}
                name='rating'
                />
             </Form.Group>
             <Form.Group>
                <Form.Label>Adventurer:</Form.Label>
                <Form.Control as="textarea" 
                rows={3}
                placeholder='About you'
                value={userInfo}
                onChange={onChangeAbout} />
             </Form.Group>
             <Button variant="warning" type="submit" className='m-3'>
                Submit
            </Button>
        </Form>

        </>
    )
}

// export const database = firebase.database().ref('/posts')