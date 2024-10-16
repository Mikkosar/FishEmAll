import { Appbar } from 'react-native-paper';

const AppBarTop = ({ pageTitle }) => {
    return (
            <Appbar.Header theme={{ colors: 'gray' }}>
                <Appbar.Content  title={pageTitle} />
            </Appbar.Header>
    );
}

export default AppBarTop