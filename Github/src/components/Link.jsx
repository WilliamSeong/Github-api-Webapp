import Styled from 'styled-components';

const StyledAppLink = Styled.a`
    color: #61dafb;
`
export default function Link({ url, title }) {
    return (
        <StyledAppLink
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            {title}
        </StyledAppLink>
    );
}

