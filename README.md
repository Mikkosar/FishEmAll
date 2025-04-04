# Fish'em All

## Sovelluksen kuvaus
Fish'em All on kalastussovellus, joka auttaa käyttäjiä seuraamaan kalastustietojaan ja saaliitaan. Sovellus tarjoaa mahdollisuuden kirjata ylös kalastustapahtumia, tarkastella saaliita kartalla ja hallita käyttäjäprofiilia.

Tämä projekti on Mobiiliohjelmointi kurssin lopputyö.

---

## Ominaisuudet
- **Kalastustietojen hallinta**: Lisää, muokkaa ja poista kalastustapahtumia.
- **Karttanäkymä**: Näe saaliisi sijainnit kartalla.
- **Käyttäjätilit**: Kirjautuminen ja rekisteröityminen Firebase Authenticationin avulla.
- **Pisteytys**: Laske kalastuspisteet saaliiden perusteella.
- **Responsiivinen käyttöliittymä**: Tyylitelty React Native Paper -komponenteilla.

---

## Käytetyt teknologiat
- **React Native**: Sovelluksen käyttöliittymän rakentamiseen.
- **Expo**: Helpottaa sovelluksen kehittämistä ja testaamista.
- **Firebase**:
  - **Authentication**: Käyttäjien kirjautumiseen ja rekisteröitymiseen.
  - **Realtime Database**: Kalastustietojen tallentamiseen.
- **React Navigation**: Navigointiin sovelluksessa.
- **React Native Maps**: Karttojen näyttämiseen.
- **React Native Paper**: Tyylitellyt käyttöliittymäkomponentit.

---

## Asennus ja käynnistys

### 1. Riippuvuuksien asennus
Asenna kaikki tarvittavat riippuvuudet komennolla:
```sh
npm install
```

### 2. Kehitysympäristön käynnistys
Käynnistä Expo-kehitysympäristö:
```sh
npx expo start
```

### 3. Testaus laitteella
- **Android**: Käytä Expo Go -sovellusta tai Android-emulaattoria.
- **iOS**: Käytä Expo Go -sovellusta tai iOS-simulaattoria.

---

## Kansiorakenne
```
FishEmAll/
├── Components/          # Sovelluksen käyttöliittymäkomponentit
├── Helpers/             # Apufunktiot ja tietojen käsittely
├── Images/              # Kuvia ja grafiikkaa
├── assets/              # Expo-sovelluksen resurssit
├── .expo/               # Expo-kehitysympäristön tiedostot
├── App.js               # Sovelluksen pääkomponentti
├── AppStyles.js         # Tyylitiedosto
├── firebaseConfig.js    # Firebase-konfiguraatio
├── package.json         # Projektin riippuvuudet ja skriptit
└── README.md            # Dokumentaatio
```

---

## Firebase-konfiguraatio
Lisää oma Firebase-konfiguraatiosi tiedostoon `firebaseConfig.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## Tulevat ominaisuudet
- [ ] Offline-tila: Mahdollisuus käyttää sovellusta ilman internet-yhteyttä.
- [ ] Lisää kalalajien tietoja ja kuvia.
- [ ] Parannettu pisteytyslogiikka.
- [ ] Tuki useille kielille.

---

## Tunnetut ongelmat
- **Expo Go -sovellus**: Ei tue natiivimoduuleja, kuten `@react-native-firebase`. Käytä Expo Development Build -ympäristöä, jos tarvitset näitä ominaisuuksia.
- **Firebase-konfliktit**: Varmista, että käytät vain yhtä Firebase SDK:ta (esim. `@react-native-firebase`). Pitää päivittää package.json ja importit.

---

## Mitä opin

Tämän projektin kautta opin kehittämään täysiverisen mobiilisovelluksen käyttäen **React Nativea** ja **Expoa**. Opin hyödyntämään **Firebase-palveluja** käyttäjähallintaan (*Authentication*) ja tietojen tallentamiseen (*Realtime Database*), sekä käyttämään ulkoisia kirjastoja, kuten **React Native Maps** ja **React Native Paper**, rakentaakseni sekä visuaalisesti miellyttävän että teknisesti toimivan käyttöliittymän.

Sovelluksen toteutus kehitti ymmärrystäni mobiilisovelluslogiikasta, navigaatiosta, tietojen tilanhallinnasta ja laiteominaisuuksien (kuten paikannuksen) hyödyntämisestä. Opin myös, miten **REST API** -pohjainen tietojenkäsittely voidaan yhdistää Firebaseen, ja kuinka tärkeää on pitää **koodirakenne selkeänä sekä modulaarisena** isommassa projektissa.

Projekti opetti lisäksi **kehitysympäristön hallintaa**, kuten Expo-kehitystyökalujen käyttöä, eri alustojen testaamista sekä pakettien hallintaa ja ongelmanratkaisua kirjasto- ja Firebase-konfliktien osalta. Sain myös kokemusta **versionhallinnasta** ja projektin **dokumentoinnista**.

---