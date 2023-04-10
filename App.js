import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('El permiso para acceder a la galería es requerido')
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.assets[0].uri});
  }

  return (
    <View className="flex-1 items-center justify-center bg-slate-800 gap-5">
      <Text className="text-white text-xl">Primera aplicación</Text>

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

      <Text className="text-white text-xl">Selecciona una imagen</Text>

      {/* Imagen tomada de internet */}
      <Image 
        source={{
          uri: 
            selectedImage !== null 
              ? selectedImage.localUri
              : 'https://picsum.photos/200/200'
        }}
        className="w-40 h-40 rounded-full"
      />

      <TouchableOpacity
        onPress={openImagePickerAsync}
        className="bg-green-600 px-5 py-2 rounded-full shadow"
      >
        <Text className="text-white capitalize text-lg">Abrir galería</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}