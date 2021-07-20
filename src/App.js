import './theme/GlobalStyles';
// import Header from './components/header/Header';
// import { PostButton } from './components/buttons/Buttons';
// import { SearchBar } from './components/input/Input';
import Home from './pages/Home';
import MakePost from './pages/makePost';
import Posting from './pages/Posting';
import Error from './pages/Error';
// import { Globalstyle } from './theme/GlobalStyles';
// import React, {useEffect} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };

// firebase.initializeApp(firebaseConfig);

function App() {

  // useEffect(() => {
  //   console.log(firebase);
  // },[])

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/post" exact component={MakePost}></Route>
        <Route path='/posting' exact component={Posting}></Route>
        <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

// export default function App() {
//   const firebaseApp = firebase.apps[0];
//   return (
//     <div>
//       <h1>React & Firebase</h1>
//       <h2>By @farazamiruddin</h2>
//       <code>
//         <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
//       </code>
//     </div>
//   );
// }
