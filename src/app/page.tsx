import React from "react";
import { useRouter } from "next/router";

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const navigateToGitHub = () => {
     if (id) {
       window.open(`https://github.com/aiteamsai/startup-${id}`, "_blank");
     }
  };

  const navigateToVercel = () => {
     if (id) {
       window.open(`https://startup-${id}.vercel.app`, "_blank");
     }
  };

  return (
    <div>
      <h1>Welcome to the Project Page</h1>
      <button onClick={navigateToGitHub}>Open project on GitHub</button>
      <button onClick={navigateToVercel}>Open project on Vercel</button>
    </div>
  );
};

export default ProjectPage;