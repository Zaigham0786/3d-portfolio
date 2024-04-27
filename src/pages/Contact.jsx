import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import Spline from '@splinetool/react-spline';
import { Helmet } from "react-helmet";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  // 
  const [captchaValue, setCaptchaValue] = useState('');

  function onChange(value) {
    setCaptchaValue(value);
  }
  // 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    if (captchaValue) {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Jmd zaigham",
            from_email: form.email,
            to_email: "mdzaigham27@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: "Thank you for your message 😃",
              type: "success",
            });

            setTimeout(() => {
              hideAlert(false);
              setCurrentAnimation("idle");
              setForm({
                name: "",
                email: "",
                message: "",
              });
            }, [2500]);
          },
          (error) => {
            setLoading(false);
            console.error(error);
            setCurrentAnimation("idle");

            showAlert({
              show: true,
              text: "I didn't receive your message 😢",
              type: "danger",
            });
          }
        );
    }

    else 
    {
      showAlert({
        show: true,
        text: "Are you a robot?",
        type: "danger",
      });
      setLoading(false);
      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation("idle");
      }, [2500]);
    }

  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
          <Helmet>
        <title>MD Zaigham | Contact</title>
        <meta name="keywords" content="MD Zaigham, Contact, Full Stack Developer, MERN Stack, Python, React.js, Django" />
        <meta name="description" content="Contact MD Zaigham, experienced full stack developer specializing in MERN Stack, Python, React.js, & Django. Get in touch to discuss your project needs." />
    </Helmet>

      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <ReCAPTCHA
            sitekey="6LdYI4YpAAAAAExlCbvUK_Kh7ab0c-cD-CnzH7DB"
            onChange={onChange}
          />
          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px] p-10 hidden md:block'>
        <Spline scene="https://prod.spline.design/A9SYQPfxrYhWfQZ3/scene.splinecode" />
      </div>

    </section>
  );
};

export default Contact;
