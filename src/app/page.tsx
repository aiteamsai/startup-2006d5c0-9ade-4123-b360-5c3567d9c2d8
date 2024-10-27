import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const StartUpProjectPage: React.FC = () => {
    const router = useRouter();
    const repoLink = "https://github.com/aiteamsai/startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8";
    const vercelLink = "https://startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8.vercel.app";

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Utils to load data or set up here...
        setLoading(true);
        // simulate data loading
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        loading ? <div>Loading...</div> :
            <div>
                <h1>StartUp Project</h1>
                <p>This is a new innovative project that integrates technology and software development, mainly focusing on repositories on Github and deployments on Vercel.</p>
                <p>The Github repository can be found at: <a href={repoLink} target="_blank" rel="noreferrer">Github Repo</a></p>
                <p>The live Vercel project can be found at: <a href={vercelLink} target="_blank" rel="noreferrer">Vercel Project</a></p>
            </div>
    )
}
export default StartUpProjectPage;