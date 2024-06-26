import {Stack} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import FontAwesome from '@expo/vector-icons/FontAwesome';

SplashScreen.preventAutoHideAsync(); 
const layout = () => {
	const [fontsLoaded] = useFonts({
		'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
		'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
		'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
		...FontAwesome.font,
	})

	const onLayoutRootView = useCallback(async () => {
		if(fontsLoaded){
			await SplashScreen.hideAsync(); 
		}
	}, [fontsLoaded])
	if(!fontsLoaded) return null; 
	
  return <Stack onLayout = {onLayoutRootView}/>;
}

export default layout