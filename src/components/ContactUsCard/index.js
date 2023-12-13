import "./index.css";

function ContactUsCard(props) {
  const { eachItem } = props;
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address
  } = eachItem;
  return (
    <div className="contact-us-card-container">
      <h1 className="contact-name">
        {firstName} {lastName}
      </h1>
      <p className="mail">{email}</p>
      <p className="number">{phoneNumber}</p>
      <p className='addres'>{address}</p>
    </div>
  );
}
export default ContactUsCard;
