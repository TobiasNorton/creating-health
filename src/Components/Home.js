import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <NavBar />
          <section className="main">
            {/* <h3>Find peace in your relationships.</h3> */}
            {/* <button className="body-appt">Set Appointment</button> */}
            <h3 className="starter-kit">Take a moment to rate your relationships.</h3>
            <Link to="/rate-your-relationships">
              <button className="body-appt">Click Here For Your Score</button>
            </Link>
          </section>
        </div>
        <div className="branches">
          <Link to="/seven-life-lessons" className="branch">
            The 7 Life Lessons
          </Link>
          <Link to="/relationship-repair" className="branch">
            Relationship Repair
          </Link>
          <Link to="/corporate-wellness" className="branch">
            Corporate Wellness
          </Link>
          <Link to="/membership" className="branch">
            Membership
          </Link>
        </div>
        <section className="message">
          <p>
            Our relationships can be our greatest source of love and safety or our greatest source
            of pain and conflict. These conflicts repeat and get harder and harder over time
            undermining our happiness and leaving us totally confused to what they are and where
            they come from. The 7 Life Lessons is a map to unlocking, understanding these conflicts
            and how to get to peace so there is no need to keep repeating them. Schedule now to
            learn this proven process for yourself and to share with your loved ones.
            <br />
            <br />
            --Suzanne Marsh
          </p>
          <h3>Testimonials</h3>
          <p>
            "I recently had the pleasure of sitting with Suzanne inside her amazingly beautiful
            space and receiving a breakthrough! I’ve read countless books, have done numerous
            therapy/coaching sessions, and have gone to weekend seminars and never got as much
            self-knowledge when she facilitated this conversation. My new found awareness gave me an
            opportunity to transform that area of my life and become a whole new person. I now know
            that the way I was viewing things gave me no real freedom--mostly worries. Not anymore!
            Thank you Suzanne for sitting with and helping me discover something so huge in 90
            minutes that would have otherwise taken months if not years!"
            <br />
            <br />- Madison T.
          </p>
          <div className="divider" />
          <p>
            "Wow, people go their whole lives not knowing about the Life lessons and how they work
            in your life. I feel lucky to learn this now rather than years from now! I can’t wait to
            learn more."
            <br />
            <br />- Paula R.
          </p>
          <div className="divider" />

          <p>
            "I had no idea the importance of forgiveness or even exactly what it was. It was hurting
            myself and my family. I feel a huge burden gone and can be around my dad without being
            angry and upset. He can’t push my buttons anymore! I’m so grateful."
            <br />
            <br />- Jen B.
          </p>
          <div className="divider" />
          <p>
            "I came to help my marriage. Our problems were getting worse and worse. I learned that
            my wife and I were judging each other and it was killing our relationship. As I’m
            working on not judging, we’re beginning to have more fun and let some walls down. We’re
            starting to get back to where we were before. I feel hope again for us and our family."
            <br />
            <br />- Greg P.
          </p>
        </section>
      </>
    )
  }
}

export default Home
