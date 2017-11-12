import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const WideInput = styled.input`
    border: 0;
    border-bottom: 2px solid #3c4448;
    width: 100%;
    font-size: 30px;
    line-height: 35px;
    height: 70px;
    text-align: center;
    padding: 10px;
    background: transparent;
    color: #3c4448;

    &:focus {
        outline: 0;
        color: #3c4448;
    }
    &::placeholder {
        color: #3c4448;
    }
`

const FormContainer = styled.form`
    width: 100%;
`


const Wrapper = styled.div `
    display: flex;
    justify-content: center;
`
const BigText = styled.h1 `
  font-size: 75px;
  font-family: 'helvetica';
`

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
        <div>
            <Wrapper>
                <FormContainer>
                    <WideInput type="text" placeholder="Type in text" value={this.state.value} onChange={this.handleChange} />
                </FormContainer>
            </Wrapper>
            <Wrapper>
                <BigText>{this.state.value}</BigText>
            </Wrapper>
        </div>
    )
  }
}

export default IndexPage

