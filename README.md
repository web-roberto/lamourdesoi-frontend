### comipacion desde github

En package.json:
"react-native": "0.68.2", (despues lo cambiaremos)
"expo": "^43.0.0",
El yarn siempre desde PowerShell como administrador y expo start desde una terminal de Bash
expo doctor --fix-dependencies --> arregla las depencias de expo y las de yarn.
En la terminal de Bash: expo start
En el navegador: http://localhost:19002/ Local(cable de usb conectado) y Run on Android device/emulator
Cada vez que hacemos un cambio al package.json hacemos un yarn y un expo doctor --fix-dependencies
Cambiar en el codigo: import AsyncStorage from "@react-native-async-storage/async-storage" por @react-native-async-storage/async-storage

## Credenciales adminstrador: admin3@gmail.com/admin3

CastError: Cast to ObjectId failed for value "undefined" (type string) at path "\_id" for model "User"
