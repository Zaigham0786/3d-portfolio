import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <a href='https://drive.google.com/file/d/1gbscRbtEuOxxetto0ZORnUHHOdqE4jUT/view?usp=drive_link' className='btn' target="__blank"> 
        Resume
      </a>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
