import '../assets/css/Contact.css'

function Contact() {
  return (
      <div className="contact" id='Contact'>
        <h3 className="title">Stay Connected,...</h3><br></br>
        <p className="contact-content">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us anytime and we'll get back to you as soon as possible.
        </p>
        <hr />
        <form>
          <input type="text" id="query" name="query" placeholder="place your query" style={{ color: 'black' }} />
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
  );
}

export default Contact;
