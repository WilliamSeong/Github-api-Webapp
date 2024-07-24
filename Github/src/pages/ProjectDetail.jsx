import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProjectDetail({ username }) {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);

    const {name} = useParams();

    useEffect(() => {
        async function fetcher() {
            const fetchProject = await fetch(`https://api.github.com/repos/${username}/${name}`)
            const data = await fetchProject.json();

            if (data) {
                setProject(data);
                setLoading(false);
                console.log(data);
            }
        }


        fetcher()
            .then(() => console.log("Good fetch"))
            .catch(() => console.log("Bad fetch"));
    }, [username, name])

    return (
        <div className='Project-container'>
            <h2><a href={project.html_url} target="_blank">Project: {project.name}</a></h2>

            {loading ? <span>Loading...</span> : <div></div>}
        </div>
    )
}