import React from 'react';
import './App.css';
import AddStory from './containers/AddStory';
import StoryList from './containers/StoryContainer';

function App() {
    return (
        <div>
            <AddStory/>
            <StoryList/>
        </div>
    );
}

export default App;
