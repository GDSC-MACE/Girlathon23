import React from 'react'
import './contact.css'
export default function Contact()
{
    return(<section style={{ width:'100dvw',paddingTop:'4rem'}}>
     <h1 style={{ paddingLeft:'3rem' }}>Contact us</h1> 
    <div className='row' style={{ display:'flex',justifyContent:'center',alignItems:'center',marginRight:'1rem',marginLeft:'1rem',marginTop:'2rem' }}>
    <div className='fade-up col-md-6'><div className='con-box ' style={{ textAlign:'center',paddingTop:'2rem',paddingBottom:'2rem',minHeight:'11rem' }}><i><img src='/images/icons8-call-64.png'/></i><br></br>
Annmary Vinod : 9656638238 <br></br>
Sivanie Nejukumar: 8590282979</div>
<div className='con-box ' style={{ textAlign:'center',marginTop:'3rem',minHeight:'11rem',display:'flex',justifyContent:'center',alignItems:'center' }}><div><i><img src='/images/icons8-email-50.png'/></i><br></br>
<p> GDSC MACE: dscmace@gmail.com</p></div></div>
</div>
        <div class="fade-up form-container col-md-6">
      <form class="form">
        <div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" required=""/>
    <label for="name" class="form__label">Name</label>
</div>
 <div class="form__group field">
    <input type="input" class="form__field" placeholder="Email" required=""/>
    <label for="email" class="form__label">Email</label>
</div>
 <div class="form__group field" style={{ maxWidth:'25rem' }}>
    <input type="input" class="form__field" placeholder="subject" required="" style={{ maxWidth:'25rem' }}/>
    <label for="subject" class="form__label">Subject</label>
</div>
<div class="form__group field" style={{ maxWidth:'25rem',minHeight:'10rem' }}>
    <textarea style={{ maxWidth:'25rem',minHeight:'15rem' }} class="form__field" placeholder="content" required=""id="textarea" name="textarea"></textarea>
    <label for="textarea" class="form__label">Content</label>
</div>

<button type='submit' className='submit'>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Send</span>
</button>
      </form>
    </div>
    </div>
    </section>);
}