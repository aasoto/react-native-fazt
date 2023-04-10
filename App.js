import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800 gap-5">
      <Text className="text-white text-xl">Primera aplicación</Text>

      {/* Imagen tomada de internet */}
      <Image 
        source={{uri: 'https://picsum.photos/200/200'}}
        className="w-40 h-40 rounded-full"
      />

      {/* Imagen local */}
      <Image
        source={require('./assets/images/andres.jpg')}
        className="w-40 h-40 rounded-full"
      />

      {/* Botón predeterminado */}
      <Button
        onPress={() => Alert.alert('Alerta botón predeterminado')}
        title="Botón predeterminado"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {/* Botón personalizable */}
      <TouchableOpacity
        onPress={() => Alert.alert('Alerta botón personalizado')}
        className="bg-blue-600 px-5 py-2 rounded-md shadow"
      >
        <Text className="text-white capitalize text-lg">Botón personalizable</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}