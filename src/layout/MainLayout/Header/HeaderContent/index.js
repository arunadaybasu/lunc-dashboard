// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
// import Search from './Search';
// import Profile from './Profile';
// import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            {!matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <IconButton
                component={Link}
                href="https://github.com/arunadaybasu"
                target="_blank"
                disableRipple
                color="secondary"
                title="A Basu"
                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
            >
                <GithubOutlined />
            </IconButton>

            {/*<Notification />*/}
            {/*{!matchesXs && <Profile />}*/}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
