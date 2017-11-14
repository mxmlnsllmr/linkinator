import React, { Component } from 'react'
import styled from 'styled-components'

const WideInput = styled.input`
  height: 60px;
  width: 100%;
  min-width: 100%;
  padding: 0;
  border-radius: 0;
  line-height: 70px;
  background-color: transparent;
  color: #3c4448;
  font-size: 30px;
  border: none;
  outline: none;
  border-bottom: 3px solid #3c4448;
  font-family: Roboto Slab, sans-serif;
  
  &:focus {
    + .input-highlight {
      border-top: 3px solid #E50064;
    }
  }
`

const HighlightInput = styled.span`
  font-size: 30px;
  line-height: 70px;
  max-width: 100%;
  border-top: 3px solid #E50064;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  color: transparent;
  user-select: none;
  overflow: hidden;
  font-family: Roboto Slab, sans-serif;
`

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
`

const InputWrapper = styled.div`
  width: 500px;
  margin: 50px auto;
  position: relative;
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
    const { value } = event.target;
    this.setState({
      value: value
    });
  }

  render() {
    const { value } = this.state;
    return(
        <div>
          <InputWrapper>
              <WideInput type="text" placeholder="Type in text" value={this.state.value} onChange={this.handleChange} />
              <HighlightInput className='input-highlight'>{ value.replace(/ /g, "\u00a0") }</HighlightInput>
          </InputWrapper>
            <Wrapper>
                <BigText>{value}</BigText>
            </Wrapper>
        </div>
    )
  }
}

export default IndexPage

