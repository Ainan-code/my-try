function ContactForm () {
    return (
        <div className="contact-form">
        <h2 id="contact-title">Contact Form</h2>
        
        <div className="row">
          <div className="inputs">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="text">
            <textarea>Your message here...</textarea>
            <button class="send">Send</button>
           
          </div>
        </div>
        
      </div>
    )
}


export default ContactForm;