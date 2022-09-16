import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  Profile: undefined;
  Article: {title: string; url: string};
  Post: {
    name: string;
    image: string;
    title: string;
    articleText: string;
    time: string;
  };
  'Nowy post': undefined;
};

export type DrawerParamList = {
  BottomNavigation: NavigatorScreenParams<BottomParamList>;
};

export type BottomParamList = {
  'Panel Główny': NavigatorScreenParams<MainScreenParamList>;
  Czat: undefined;
  Znajomi: undefined;
  Sklep: undefined;
};

export type MainScreenParamList = {
  Main: NavigatorScreenParams<MainScreenTabParamList>;
};

export type MainScreenTabParamList = {
  Tablica: undefined;
  Wydarzenia: undefined;
  Artykuły: undefined;
  Wideo: undefined;
};

export type EventsScreenParamList = {
  Events: NavigatorScreenParams<EventsScreenTabParamList>;
};

export type EventsScreenTabParamList = {
  Nadchodzące: undefined;
};

export type ArticlesScreenParamList = {
  Articles: NavigatorScreenParams<ArticlesScreenTabParamList>;
};

export type ArticlesScreenTabParamList = {
  Wszystkie: undefined;
};

export type VideoScreenParamList = {
  Video: NavigatorScreenParams<VideoScreenTabParamList>;
};

export type VideoScreenTabParamList = {
  Nowe: undefined;
};

export type BottomScreenNavigation = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'BottomNavigation'>,
  NativeStackScreenProps<RootStackParamList, 'Drawer'>
>;

export type MainNavigation = NativeStackScreenProps<RootStackParamList>;

export type DrawerScreenNavigation = NativeStackScreenProps<
  RootStackParamList,
  'Drawer'
>;

export type ArticleScreenNavigation = NativeStackScreenProps<
  RootStackParamList,
  'Article'
>;

export type PostScreenNavigation = NativeStackScreenProps<
  RootStackParamList,
  'Post'
>;

export type NewPostScreenNavigation = NativeStackScreenProps<
  RootStackParamList,
  'Nowy post'
>;
