import React from 'react';
import axios from 'axios';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ContactFormContainer } from './contact-form.styles.jsx';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject:'',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  onMsgChange(event) {
    this.setState({message: event.target.value})
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send-contact",
      data: this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm();
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.");
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '',subject:'', message: ''})
  }

  render() {
    return (
      <ContactFormContainer>
        <h2 className="title">Contact Us</h2>
        <p>Let us know what you think! In order to provide better service, please do not hesitate to give us your feedback. Thank you.</p>
        <form id="contact-form"
          onSubmit={this.submitEmail.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <FormInput id="name"
              type="text"
              label="Name"
              className="form-control"
              required
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            <FormInput id="email"
              type="email"
              label="Email"
              className="form-control"
              aria-describedby="emailHelp"
              required
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <FormInput id="subject"
              type="text"
              label="Subject"
              className="form-control"
              required
              value={this.state.subject}
              onChange={this.onSubjectChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <FormInput id="message"
              label="Message"
              className="form-control"
              rows="1"
              required
              value={this.state.message}
              onChange={this.onMsgChange.bind(this)}
            />
          </div>
          <CustomButton type="submit" className="primary-btn submit">SEND IT</CustomButton>
        </form>
      </ContactFormContainer>
    );
  }
}

export default ContactForm;
