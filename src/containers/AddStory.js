import React from 'react'
import {connect} from 'react-redux'
import {addStory} from './../actions/index';

const AddStory = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value)
                        return;
                    dispatch(addStory(input.value));
                    input.value = ''
                }}>
                <input ref={v => {
                    input = v
                }}/>
                <button type='submit'>addStory</button>
            </form>
        </div>
    )
}
export default connect()(AddStory)
