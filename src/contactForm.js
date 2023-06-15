function contactForm () {
    return (
        <div class="contact-form">
        <h2 id="contact-title">Contact Form</h2>
        <p class="darker">
          Nunc diam leo, fringilla vulputate elit lobortis, consectetur
          vestibulum quam. Sed id felis ligula. In euismod libero at magna
          dapibus, in rutrum velit lacinia. Etiam a mi quis arcu varius
          condimentum.
        </p>
        <div class="row">
          <div class="inputs">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div class="text">
            <textarea>Your message here...</textarea>
            <button class="send">Send</button>
            <div class="contact-form-bg"></div>
          </div>
        </div>
      </div>
    )
}


export default contactForm;