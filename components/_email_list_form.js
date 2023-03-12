
export default function EmailListForm() {

  return(<>
      <section className='email-list'>
        <form onSubmit={ handleSubmit }>
          <h2>Get Your Value</h2>
          <p>I don't know when I will send emails.</p>
          <div className='wrapper'>
            <input type='email' name='email' placeholder='youremail@example.com' required/>
            <button type='submit'> Get Free Value </button>
          </div>
        </form> 
      </section>
  </>)
}

async function handleSubmit(event) {
  event.preventDefault()

  const response = await fetch('/api/email-list/', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
            email: event.target.email.value,
    }),
  });

  // FIRE ANIMATION OR SOMETHING

  if (response.redirected) {
    // window.location.href = response.url;
  }
}
