import { useState, useEffect } from "react";
import { FaUnlock } from "react-icons/fa6";
import Header from "../Header";
import ContactUsCard from "../ContactUsCard";
import Footer from '../Footer'
import "./index.css";

function ContactUs() {
  const [contactList, setContactList] = useState([]);

  const fetchContactListApi = async () => {
    try {
      const response = await fetch("http://localhost:5001/");
      const fetchedData = await response.json();
      setContactList(fetchedData);
      console.log(contactList);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchContactListApi();
  }, []);
  return (
    <div className="contact-us-bg-container">
      <Header />
      <div className="contact-us-container">
        <div className="contact-us-page">
          <div className="contact-us-button">
            <h1 className="contact-us-title">ContactUs</h1>
            <button className="button">
              <FaUnlock />
              Hire Me
            </button>
          </div>
          <ul className="contact-ul-container">
            {contactList.map((each, index) => (
              <ContactUsCard key={index} eachItem={each} />
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default ContactUs;
