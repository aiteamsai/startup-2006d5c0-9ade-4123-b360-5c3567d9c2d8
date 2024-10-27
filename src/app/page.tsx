// pages/index.tsx
import {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h2>Project Name</h2>
      <p>This project lies at the intersection of technology and software development, mainly focusing on creating a repository on 
      GitHub and initializing a deployment project on Vercel. </p>
      <p>The core idea is based on bringing efficiency, speed, and convenience into the software development process. 
      The key features include creating a Linked Repository for managing and storing project versions and setting up a Live Vercel 
      project for instant deployment of developments.</p>
      <p>Find out more on our:
        <ul>
           <li><a href="https://github.com/aiteamsai/startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8">GitHub repository</a></li>
           <li><a href="https://startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8.vercel.app">Vercel project</a></li>
        </ul>
      </p>
    </div>
  )
}

export default Home