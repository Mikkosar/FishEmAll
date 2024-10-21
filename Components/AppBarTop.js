import { Appbar } from 'react-native-paper';

const AppBarTop = ({ pageTitle, fisherScore, isCatchList }) => {
    return (
            <Appbar.Header theme={{ colors: 'gray' }}>
                <Appbar.Content title={pageTitle} />
                {isCatchList && (
                    <Appbar.Content title={`Score: ` + fisherScore} />
                )}
            </Appbar.Header>
    );
}

export default AppBarTop