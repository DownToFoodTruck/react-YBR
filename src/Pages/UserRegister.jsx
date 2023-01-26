import React from 'react';
import { Button, Form, FormLabel } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function UserRegister() {

  const initRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    initRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
    console.log()
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  // function click(e) {
  //   e.preventDefault();
  //   console.log("CLICKED")
  //   console.log(success)
  // }

  const handleSubmit = async(e) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email)
    const v2 = USER_REGEX.test(user);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry");
        console.log("invalid")
        return;
    }

    // try {

    // } catch(err) {
    //   if (!err?.response) {
    //     setErrMsg('No Server Response')
    //   } else if (err.response?.status === 409) {
    //     setErrMsg('Username Taken')
    //   } else {
    //     setErrMsg('Registration Failed')
    //   }
    //   errRef.current.focus();
    // }
    // console.log(email, user, pwd);
    console.log(success);
    setSuccess(true);
  }

  return (
    <div className="reg-body">
      {success ? (
          <section className='reg-success'>
              <h1>Success!</h1>
              <p>
                <Link to="/UserLogin">Sign In</Link>
              </p>
          </section>
      ) : (

      <section className="reg-cont">

        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>

        <h1>Create Account</h1>

        <Form className="reg-form" action="/register" method="post">

          <FormLabel htmlFor="email">
            Email:
            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
          </FormLabel>

            <input
              type="text"
              name="email"
              id="email"
              ref={initRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)} 
            />

            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be a valid email.
            </p>

          <FormLabel htmlFor="username">
            Username:
            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
          </FormLabel>

            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)} 
            />

            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 16 characters.<br />
              Must begin with a letter. <br />
              Letters, numbers, and symbols - _ ! @ # $ % allowed.
            </p>

          <FormLabel htmlFor="password">
            Password:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
          </FormLabel>

            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

          <FormLabel htmlFor="confirm_pwd">
            Confirm Password:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
          </FormLabel>

            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />

            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"} >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match password input field.
            </p>

          <Button disabled={!validEmail || !validName || !validPwd || !validMatch ? true : false} onClick={handleSubmit} >Register</Button>

        </Form>

        <p>
          Already have an account? <br />
          <span className="line">
          <Link to="/UserLogin">Sign In</Link>
          </span>
        </p>

      </section>
    )}

    </div>
  )};