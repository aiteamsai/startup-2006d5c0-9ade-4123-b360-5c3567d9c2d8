import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProjectPage = () => {
  const router = useRouter()
  const [data, setData] = useState(null)

  useEffect(() => {
    // Replace with your GitHub API endpoint
    fetch('https://api.github.com/repos/aiteamsai/startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8')
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <a href="https://startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8.vercel.app" target="_blank" rel="noopener noreferrer">Vercel Project</a>
    </div>
  )
}

export default ProjectPage