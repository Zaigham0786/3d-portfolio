import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <a href='https://drive.usercontent.google.com/u/1/uc?id=1Sy6o3spEmCj7itv9wnPL3eIqTeODjcKv&export=download' className='btn'>
        Resume
      </a>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
