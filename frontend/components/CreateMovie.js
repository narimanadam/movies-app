import React, { Component } from 'react';
import { FormStyled } from './styles/FormStyled'
import InputField from './InputField';
import Textarea from './Textarea';
class CreateMovie extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <FormStyled>
                        <InputField type="file" placeholder="Upload Movie Image" label="Upload Movie Image" />
                        <InputField type="text" placeholder="Movie Name" label="Movie Name" />
                        <InputField type="text" placeholder="Movie Name" label="Movie Type" />
                        <Textarea type="text" placeholder="Write movie description ..." label="Movie Description" />
                    </FormStyled>
                </div>
            </div>
        );
    }
}

export default CreateMovie;