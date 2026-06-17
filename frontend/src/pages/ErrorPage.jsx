import '../styles/errorPage.css';

import Image from '../assets/404.gif';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {

  const navigate = useNavigate();

  // redirect to previous page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="errorPage">
      <div className="errorPage__container">
        <img src={Image} alt="404 - Page Not Found" />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You will be redirected to the previous page shortly.</p>
      </div>
    </section>
  )
}

export default ErrorPage
