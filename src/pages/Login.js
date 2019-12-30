import React, { Component } from 'react'
import styled from 'styled-components';

import FormAuth from '../components/FormAuth'

const Container = styled.div.attrs(props => ({
  className: `flex h-full justify-${props.justify} py-10`
}))``

export default class Login extends Component {
  render() {
    return (
      <Container justify="center">
        <FormAuth/>
      </Container>
    )
  }
}
