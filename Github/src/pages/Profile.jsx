import Styled from "styled-components";

import {useState, useEffect} from "react";
import Link from "../components/Link.jsx"
import List from "../components/List.jsx"

const StyledContainer = Styled.div`
    width: 50%;
    margin: 10px auto;
`

const StyledAvatar = Styled.img`
    width: 150px;
`

// eslint-disable-next-line react/prop-types
export default function Profile({username}) {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url} />,
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url} />,
        },
        {
            field: 'name',
            value: profile.name
        },
        {
            field: 'company',
            value: profile.company
        },
        {
            field: 'location',
            value: profile.location
        },
        {
            field: 'email',
            value: profile.email
        },
        {
            field: 'bio',
            value: profile.bio
        },
    ];

    useEffect(() => {
        async function fetcher() {
            const fetchProfile = await fetch(`https://api.github.com/users/${username}`);
            const data = await fetchProfile.json();


            if (data) {
                setProfile(data);
                setLoading(false);
            }
        }

        fetcher()
            .then(() => console.log("Good fetch"))
            .catch(() => console.log("Bad fetch"));

    }, [username]);

    useEffect(() => {
        console.log(profile)
    }, [profile])

    return (
        <StyledContainer>
            <h2>About me</h2>
            {
                loading ? (
                    <div>
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div>
                        <h3>{profile.name}</h3>
                        <StyledAvatar src={profile.avatar_url} alt={profile.name}/>
                        <List items={items} />
                    </div>
                )}
        </StyledContainer>
    )
        ;
}

