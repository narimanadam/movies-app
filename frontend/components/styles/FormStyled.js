import styled from 'styled-components';

export const FormStyled = styled.form`
    max-width: 700px;
    height: 400px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 30px;
    margin: auto;

    .form {
        &__group {
            margin-bottom: 15px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        
        &__label {
            display: block;
            margin-bottom: 10px;
            font-size: 14px;
            text-transform: Capitalize;
        }

        &__field {
            padding-left: 15px;
            width: 100%;
            max-width: 100%;
            height: 35px;
            line-height: 35px;
            border-radius: ${props => props.theme.borderRadius};
            border: 1px solid ${props => props.theme.lightGray};
            box-shadow: none;
            font-size: 14px;
            &:focus {
                box-shadow: none;
                outline: 0;
            }
        }

        &__textarea {
            height: 100px;
            padding-left: 15px;
            width: 100%;
            max-width: 100%;
            line-height: 35px;
            border-radius: ${props => props.theme.borderRadius};
            border: 1px solid ${props => props.theme.lightGray};
            box-shadow: none;
            resize: none;
            font-size: 14px;
            &:focus {
                box-shadow: none;
                outline: 0;
            }
        }
    }
`;