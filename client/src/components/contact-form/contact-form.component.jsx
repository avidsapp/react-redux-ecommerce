import React, { useState } from "react";
import axios from 'axios';

// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
//
// import { ContactFormContainer } from './contact-form.styles.jsx';
//
// const ContactForm = () => {
//   const [status, setStatus] = useState("SEND IT");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("SEND IT");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <ContactFormContainer>
//       <form className='sign-up-form' onSubmit={handleSubmit}>
//         <h2>Provide feedback</h2>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" placeholder="Name" required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" placeholder="Email" required />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" placeholder="Message" required />
//         </div>
//         <CustomButton type='submit'>{status}</CustomButton>
//       </form>
//     </ContactFormContainer>
//   );
// };
//
// export default ContactForm;

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
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
    }

    resetForm(){
            this.setState({name: '', email: '',subject:'', message: ''})
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form" onSubmit={this.submitEmail.bind(this)}
                                    method="POST">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name" type="text"
                                       className="form-control" required value={this.state.name}
                                       onChange={this.onNameChange.bind(this)}/>
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                      required value={this.state.email} onChange=
                                      {this.onEmailChange.bind(this)}/>
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject"  id="subject" type="text"
                                      className="form-control" required value={this.state.subject}
                                      onChange={this.onSubjectChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message"
                                       className="form-control" rows="1"
                                       required value={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)}/>
                                </div>
                                <button type="submit" className="primary-btn submit">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default ContactForm;
