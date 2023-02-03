
export default function AdminPosts() {
    return (
      <>
          <h1>Log In</h1>
  
          <form onSubmit={handleSubmit}>
  
              <input name="email" />
              <br/>
              <input type="password" name="password" id="" />
              <br/>
              <button type="submit">Log In</button>
  
          </form>
  
      </>
    )
  }
  
  async function handleSubmit(event) {
      event.preventDefault()
      const response = await fetch('/api/blog/log-in/',
        {
          method: 'POST',
          body: JSON.stringify({
                  email: event.target.email.value,
                  password: event.target.password.value,
              }),
          headers: {
                  'Content-Type': 'application/json',
              },
      })
      if (response.redirected) {
        window.location.href = response.url;
      }
  
  }
  
  
  
