import React from 'react';
import './App.css';
import firebase from './firebase'
import Contacts  from './components/Contacts';


function App() {  
  return (
        <div className="row">
            <div className="col-md-8 offset-md-1">
              <Contacts />
          
            </div>
        </div>
          );
            }
export default App;
