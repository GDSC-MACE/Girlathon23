import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <section id="CONTACT" style={{ width: "100dvw", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="contact-bg-text">contact</h1>
      </div>
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".3",
          width: "100%",
        }}
        src="images/backgroundAbstarct.png"
      />
      <h1
        style={{ paddingLeft: "3rem", paddingTop: "4rem" }}
        className="getTouch"
      >
        Get in touch
      </h1>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "1rem",
          marginLeft: "1rem",
          marginTop: "2rem",
        }}
      >
        <div className="fade-up form-container row" style={{ zIndex: "5" }}>
          <div
            className="fade-up scale-up col-md-6 p-4"
            style={{ zIndex: "5" }}
          >
            <div
              className="con-box "
              style={{
                textAlign: "center",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingInline: "1rem",
                minHeight: "7rem",
                zIndex: "5",
              }}
            >
              <i>
                <img src="/images/icons8-call-64.png" />
              </i>
              <br></br>
              Annmary Vinod : 9656638238 <br></br>
              Sivanie Nejukumar: 8590282979
            </div>
            <div
              className="con-box "
              style={{
                textAlign: "center",
                marginTop: "3rem",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingInline: "1rem",
                minHeight: "7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "5",
              }}
            >
              <div>
                <i>
                  <img src="/images/icons8-email-50.png" />
                </i>
                <br></br>
                <p> GDSC MACE: dscmace@gmail.com</p>
              </div>
            </div>
            <div
              className="con-box "
              style={{
                textAlign: "center",
                marginTop: "3rem",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingInline: "1rem",
                minHeight: "7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "5",
              }}
            >
              <div style={{ zIndex: "5" }}>
                <i>
                  <img src="/images/lc.png" />
                </i>
                <br></br>
                <p>
                  {" "}
                  3J39+JM3, College Junction Road, Kothamangalam, Kerala 686666
                </p>
              </div>
            </div>
          </div>
          <form
            className="form col-md-6"
            target="_blank"
            action="https://formsubmit.co/5f13444c1842d27eb7f86259849af44b"
            method="POST"
          >
            <div className="form__group field">
              <input
                type="input"
                name="name"
                className="form__field"
                placeholder="Name"
                required
              />
              <label for="name" className="form__label">
                Name
              </label>
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                required
                name="email"
              />
              <label for="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field" style={{ maxWidth: "25rem" }}>
              <input
                type="input"
                className="form__field"
                placeholder="subject"
                name="subject"
                required
                style={{ maxWidth: "25rem" }}
              />
              <label for="subject" className="form__label">
                Subject
              </label>
            </div>
            <div
              className="form__group field"
              style={{ maxWidth: "25rem", minHeight: "10rem" }}
            >
              <textarea
                style={{ maxWidth: "25rem", minHeight: "15rem" }}
                className="form__field"
                placeholder="content"
                required
                id="textarea"
                name="content"
              ></textarea>
              <label for="textarea" className="form__label">
                Content
              </label>
            </div>
            <button type="submit" className="submit">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
