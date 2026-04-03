export type RootStackParamList = {
    Splash: undefined;
    Auth: undefined;
    Main: undefined;
};

export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
};

export type MainTabParamList = {
    HomeTab: undefined;
    Store: undefined;
    Settings: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    SessionResult: {
        questionId: string;
    };
};
