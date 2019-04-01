import styled from 'styled-components';

export const ThumbnailStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    justify-items: center;
    .thumb {
        &__item {
            list-style: none;
            box-shadow: ${props => props.theme.boxShadow};
        }
        &__img-wrapper {
            display: inline-block;
        }
        &__img {
            max-width: 100%;
            border-radius: ${props => props.theme.borderRadius};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        &__info {
            padding: 20px 10px;
        }
        &__title {
            font-size: 20px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        &__desc {
            font-size: 14px;
        }
        &__actions {
            border-top: ${props => props.theme.border};
            padding: 20px 15px;
            text-align: center;
        }
    }
`;