import React from "react";
import PropTypes from "prop-types";
import { StyledPreface } from "./Preface.styled";
import tpg from '../../../assets/tpg.png'
import telecomms from '../../../assets/telecomms.png'    


const Preface = (props) => {
  return (
    <>
      <StyledPreface>
        <h1>Preface - WHAT IS ...</h1>
        <article>
          <div>
            <h2>
              <b>WHAT IS</b> the identity?
            </h2>
            <p>
              A bit of a big question, but to make things easy to understand and
              oversimplifying it, identity is who we are and how people connect
              to us.
            </p>
            {/* <img id='telecoms' src={telecomms} alt="Telecoms"></img> */}
            {/* <img id='tpg' src={tpg} alt="tpg"></img> */}

          </div>
        </article>

        <article>
          <div>
            <h2>
              <b>WHAT IS</b> the chain?
            </h2>
            <p>
              Chains are everywhere, they exists within us in our<a href="http://www.jstor.org/stable/3751685">chains of
              memory</a>and they exists as chains that
              link between one another. At one point, you confirm would have
              recognized someone who was a friend of another. That is a chain of
              identity would be recognized.
            </p>
          </div>
        </article>

        <article>
          <div>
            <h2>
              <b>WHAT IS</b> the importance of the identity?
            </h2>
            <p>
              Obligations, Responsibilities! Knowing what part of you makes you,
              you is important. Lets look at it from a more realistic stand
              point, if you owed me money and I experienced dementia and forgot
              about our agreement, do you still owe me money? Am I the same
              person even if my behavior or mannerisms changed? This is a
              never-ending rabbit hole of questions, but the point is that our
              identity is how people relate to us!
            </p>
          </div>
        </article>

        <article>
          <div>
            <h2>
              <b>WHAT IS</b> mobile telecommunication?
            </h2>
            <p>
              We all know the big 3 4 telecommunication companies, Singtel,
              Starhub, M1 and rightfully last TPG. TPG being the latest new
              commoner. The rise of telecommunication started out as
              government-owned<a href="https://doi.org/10.1057/dddmp.2014.80">monopolies</a>, where one or a few companies
              dominates the entire market and the claim was that it provided
              customers with the ability to easily communicate with one another
              with the ease of government-funded infrastructure. Fast forward to
              today, although we still see these monopolies existing especially
              in Singapore, everyone now has a mobile number with Singapore
              having a<a href="https://www.statista.com/statistics/542918/mobile-phone-penetration-in-singapore/#:~:text=In%202020%2C%20the%20mobile%20phone,around%201.5%20mobile%20phone%20subscriptions">
              mobile penetration of 148%</a>

            </p>
          </div>
        </article>

        <article>
          <div>
            <h2>
              <b>WHAT IS</b> the mobile identity?
            </h2>
            <p>
              With each mobile phone exists a mobile number and for many, this is
              how people relate to us. Be it for purchasing goods and services
              from<a href="https://www.youtube.com/watch?v=sNWKgGpuse0">familiar jingle of Pizza hut</a>'62 35 35 35 pizza hut delivery'
              or the<a href="https://www.youtube.com/watch?v=BrmPOfzHRYo&ab_channel=TheMichelleChongChannel">iconic commercial from Beijing 101</a>'6558 8101', or 
              <a href="https://www.channelnewsasia.com/singapore/dbs-phishing-scam-sms-warning-targeting-customers-ocbc-2445556">scam calls from +65 numbers</a>
              that claim that they are from DBS bank or your uncle's lucky number '8888
              8888'. The mobile identity is our mobile number and it takes the role of communication 
              and interaction and is personalized to the user. We form memories with this identity 
              that serves as an extension of our own identity, a digital identity. Speaking of memories, 
              we experience the mobile identity more commonly on our own phones. 
              Throughout the years we change our mobile phones, from our good old Nokia phone to our 
              stylish and hip flip/slide phone to our current smartphones. But what stays are the 
              numbers that we use. This is the identity that people remember us by that exists regardless 
              of the model of our phone. How poetic that no matter how cheap or expensive your phone is, 
              you have access to the same level of service!
            </p>
          </div>
        </article>
      </StyledPreface>
    </>
  );
};

Preface.propTypes = {};

export default Preface;
