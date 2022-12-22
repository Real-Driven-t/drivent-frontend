import dayjs from 'dayjs';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { toast } from 'react-toastify';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

   handleSubmit = async(e) => {
     e.preventDefault();
     const { postPayment, ticketId, setReload, reload } =  this.props;
     try{
       const body = {
         ticketId,
         cardData: {
           issuer: 'Visa',
           number: this.state.number,
           name: this.state.name,
           expirationDate: dayjs(this.state.expiry).add(1, 'day').toISOString(),
           cvv: this.state.cvc
         },
       };
       await postPayment(body);
       setReload(reload => reload + 1);
       toast('Compra confirmada');
     } catch (err) {
       toast('Verifique suas informações');
     }
   }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <CreditCardContainer>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <CreditCardForm onSubmit={this.handleSubmit}>
        	<input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <label>E.g.: 49..., 51..., 36..., 37...</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <div>
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <button>FINALIZAR PAGAMENTO</button>
        </CreditCardForm>
      </CreditCardContainer>
    );
  }
}

const CreditCardContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 0%;
  position: relative;
`;

const CreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 35px;

  input {
    width: 350px;
    height: 45px;
    border-radius: 6px;
    border-width: 1px;
    margin-top: 10px;
    font-weight: 600;
    color: grey;
    line-height: none;
    ::placeholder {
      padding-left: 5px;
    }    
  }

  label {
    font-size: 14px;
    color: grey;
    margin-top: 5px;
  }

  div {
    display: flex;
    & > :nth-child(1) {
      width: 230px;
      margin-right: 20px;
    }
    & > :nth-child(2) {
      width: 100px;
    }    
  }

  button {
    width: 182px;
    height: 37px;
    background: #E0E0E0;
    border: none;
    font-size: 14px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    position: absolute;
    bottom: -85px;
    left: 0;
    cursor: pointer;
  }
`;
