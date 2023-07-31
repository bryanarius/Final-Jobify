import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job<span> tracking </span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            perspiciatis laudantium, ea repudiandae ipsam necessitatibus sit
            eligendi nostrum esse aliquid quam, ut tenetur fugit libero
            accusamus repellendus enim possimus totam!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>

          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
