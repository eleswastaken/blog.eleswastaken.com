
export default function EmailListForm() {

  return(<>
      <section className='email-list'>
        <form onSubmit={ handleSubmit }>
          <h2>Get Your Value</h2>
          <p>I don't know when I will send emails.</p>
          <div className='wrapper'>
            <input type='email' name='email' placeholder='youremail@example.com' required/>
            <button onClick={ ()=> console.log('hello') }type='submit'> Get Free Value </button>
          </div>
        </form> 
      </section>
  </>)
}

function handleSubmit(event) {
  console.log('Submit fired')
}
