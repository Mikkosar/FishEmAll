import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      paddingBottom: 10,
      paddingTop: 10
    },

    cardText: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    fishList: {
      width: '90%',
      paddingHorizontal: 8
    },

    newFishButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      zIndex: 1,
      backgroundColor: 'lightgray'
    },

    cardContainer: {
      marginTop: 25,
      backgroundColor: 'lightgray'
    },

    modalContainer: {
      backgroundColor: 'white',
      height: '90%',
      width: '90%',
      padding: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      left: '5%',
      top: '5%',
    },

    modalImageContainer : {
      width: '100%',
      marginBottom: 5,
      marginTop: 5,
    },

    modalCardContainer: {
      width: '90%',
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'lightgray',
      marginTop: 10
    },

    speciesText: {
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },

    dateText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },

    detailsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '60%', 
    },

    detailText: {
      fontSize: 16,
    },
    
    modalCardContainerMap: {
      width: '90%',
      padding: 5,
      backgroundColor: 'lightgray',
      marginTop: 10,
    },

    modalCardContainerNewFish: {
      width: '90%',
      height: 150,
      backgroundColor: 'lightgray',
      marginTop: 10,
      alignItems: 'center',
    },

    ScrollView: {
      flex: 1,
      width: 250,
    },

    textInputFormDate: {
      width: '90%',
      backgroundColor: 'lightgray',
      alignItems: 'center'
    },

    textInputFormDetails: {
      width: '90%',
      backgroundColor: 'lightgray',
      paddingLeft: 10
    },

    modalContent: {
      backgroundColor: 'white',
      width: '90%',
      height: '90%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    modalContainerNewFish: {
      backgroundColor: 'white',
      height: '90%',
      width: '90%',
      paddingTop: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      left: '5%',
      top: '5%',
    },

    listHeader: {
      alignItems: 'center',
      textAlign: 'center'
    },

    listItem: {
      alignItems: 'center',
      paddingBottom: 200
    },

    newFishButtonSubmit: {
      position: 'absolute',
      bottom: -50,
      alignItems: 'center',
      backgroundColor: 'lightgray'
    },

    listContentContainer: {
      paddingBottom: 90,
    },

    dateTimePickerContainer: {
      alignItems: 'center',
  },
});

export default styles;