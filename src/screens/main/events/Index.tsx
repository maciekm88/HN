import {ScrollView, Text} from 'react-native';
import React from 'react';

//components
import MontserratSemiBold from '../../../components/fonts/Montserrat-SemiBold';

//styles
import {theme} from '../../../styles/styles';
import {scale} from 'react-native-size-matters';

const Index: React.FC = (): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={{marginHorizontal: scale(23)}}>
      <MontserratSemiBold size={24} color={theme.color.main}>
        MÓJ KOMENTARZ DO ZADANIA:
      </MontserratSemiBold>
      <Text
        style={{
          fontSize: theme.fontSize.twelve,
          color: theme.backgroundColor.red,
        }}>
        Bardzo serdecznie chciałem podziękować za możliwość wzięcia udziału w
        rekrutacji. Wykonując zadania starałem się należycie zaprezentować moją
        wiedzę. Nie wszystko jednak udało mi się zrobić tak, jak chciałem.
        Zadanie było dość obszerne i nie ze wszystkim się wyrobiłem w czasie. Na
        koniec chciałbym jeszcze zaprezentować kilka moich koncepcji lub braków
        dotyczących wykonanego przeze mnie zadania:{'\n'}
        {'\n'}- Nie zdążyłem zrobić dodawania posta do flatlisty, planując
        zadanie korzystałem z pliku json znajdującego się na zewnętrznym
        serwerze.{'\n'}
        {'\n'}- Posty we flatliście są klikalne, ekran posta jest minimalnie
        ostylowany{'\n'}
        {'\n'}- Cała nawigacja jest klikalna, przenosi do odpowiednich ekranów
        {'\n'}
        {'\n'}- Dostęp do ekranu NOWY POST można uzyskać po otworzeniu Drawer
        Navigation, tj. po kliknięciu w zdjęcie w prawym górnym rogu ekranu.
        {'\n'}
        {'\n'}- Ekran NOWY POST jest również ostylowany, brakuje jednak ww
        funkcjonalności{'\n'}
        {'\n'}- Zainstalowałem kilka niezbędnych bibliotek, np.
        react-native-size matters w celu prawidłowego wyświetlania programu na
        różnych wielkościach ekranów, w tym również na tabletach.{'\n'}
        {'\n'}- Czcionki są zaimplementowane globalnie, dodane są również ikony
        wykorzystując pliki svg do ich stworzenia{'\n'}
        {'\n'}- Tryb poziomy jest zablokowany globalnie.{'\n'}
        {'\n'}- Zdaję sobie sprawę z kilku braków, na pewno się jeszcze nad nimi
        pochylę.{'\n'}
        {'\n'}W razie niejasności lub dalszych pytań proszę o kontakt pod
        numerem telefonu: 535543153.{'\n'}
        Raz jeszcze dziękuję,{'\n'}z poważaniem,{'\n'}
        Maciej Matraszek
      </Text>
      <Text
        style={{
          fontSize: theme.fontSize.twelve,
          color: 'blue',
        }}>
        {'\n'}Update 20.09.2021:{'\n'}
        {'\n'}- Przebudowałem górną nawigację zamieszczając w niej input
        wyszukiwarki{'\n'}
        {'\n'}- Górną nawigację można przesuwać gestem, gdyż zakładki nie
        mieszczą się na ekranie{'\n'}
        {'\n'}- Dokonałem drobnych zmian w Drawer Navigation.{'\n'}
        {'\n'}Dalsze zmiany w toku.{'\n'}
      </Text>
    </ScrollView>
  );
};

export default Index;
