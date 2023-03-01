import { useEffect } from 'react';

export default function AdminPosts() {

    useEffect(() => {
      async function f() {
        const response = await fetch('/api/blog/admin/is-logged-in/', {

        });

        if (response.status != 200) {
          window.location.href = '/blog/admin/log-in';
        }
      }
      f();
    }, []);

    return (
      <>
          <h1>Admin Page</h1>
  
          <a href="/blog/admin/posts">New Blog Post</a>
          <a href="">Log Out</a>

      </>
    )
  }

