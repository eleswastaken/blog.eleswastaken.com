
export default function AdminPosts() {
  return (
    <>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>

            <input name="title" required/>
            <br/>
            <input name="preview" />
            <br/>
            <textarea name="content" id="content" cols="30" rows="10" required></textarea>
            <br/>
            <button type="submit">Create Post</button>

        </form>

    </>
  )
}

async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/blog/admin/posts/',
      {
        method: 'POST',
        body: JSON.stringify({
                title: event.target.title.value,
                preview: event.target.preview.value,
                content: event.target.content.value,
            }),
        headers: {
                'Content-Type': 'application/json',
            },
    })
    // manually redirecting if the server redirected somewhere
    if (response.redirected) {
      window.location.href = response.url;
  }


}


