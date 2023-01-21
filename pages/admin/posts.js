
export default function AdminPosts() {
  return (
    <>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>

            <input name="title" />
            <br/>
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
            <br/>
            <button type="submit">Create Post</button>

        </form>

    </>
  )
}

async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/admin/posts/',
      {
        method: 'POST',
        body: JSON.stringify({
                title: event.target.title.value,
                content: event.target.content.value,
            }),
        headers: {
                'Content-Type': 'application/json',
            },
    })

}


