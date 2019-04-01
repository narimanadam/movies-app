import React, { Component, Fragment } from 'react';
import Layout from './Layout';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
    main: '#373F51',
    sec: '#58A4B0',
    black: '#132E32',
    white: '#fff',
    lightGray: '#D8DBE2',
    boxShadow: '1px 2px 3px #D8DBE2',
    borderRadius: '3px',
    border: '1px solid #eee'
}

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Roboto', sans-serif;
    }

    .main-wrapper {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        padding-bottom: 100px;
    }

    .container {
        max-width: 1280px;
        margin: auto;
    }

    .page-content {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Meta />
                    <div className="main-wrapper">
                        <Layout>
                            <div className="page-content">
                                {this.props.children}
                            </div>
                        </Layout>
                    </div>
                    <GlobalStyles />
                </Fragment>
            </ThemeProvider>
        );
    }
}

export default Page;