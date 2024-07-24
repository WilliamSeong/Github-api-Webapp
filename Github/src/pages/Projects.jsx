import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import List from "../components/List.jsx"
import Styled from "styled-components";

const StyledWrapper = Styled.div`
    width: 50%;
    margin: auto;
`

// eslint-disable-next-line react/prop-types
export default function Projects({username}) {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetcher() {
            const fetchProjects = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await fetchProjects.json();

            if (data) {
                setProjects(data);
                setLoading(false);
            }
        }

        fetcher()
            .then(() => console.log("Good fetch"))
            .catch(() => console.log("Bad fetch"));
    }, [username]);

    return(
        <StyledWrapper>
            {
                loading ? (
                    <span>Loading...</span>
                ) : (
                    <div>
                        <List
                            items={projects.map((project) => ({
                                field: project.name,
                                value: (
                                    <NavLink to={`/projects/${project.name}`}>
                                        Open project
                                    </NavLink>
                                ),
                            }))}
                        />
                    </div>
                )
            }
        </StyledWrapper>
    )
}