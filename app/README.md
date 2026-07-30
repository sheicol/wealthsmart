# WealthSmart — App

Expo + React Native + React Native Web. Una sola base de código para iOS, Android y web —
esto reemplaza el prototipo de Figma y la demo de Flask/Streamlit: las pantallas que construyas
aquí son directamente el producto real.

## Setup local (requiere Node.js 18+)

```powershell
cd app
npm install
```

## Correr en el navegador (para pruebas rápidas / demos con usuarios)

```powershell
npm run web
```

## Correr en el teléfono (con la app Expo Go)

```powershell
npm start
```
Escanea el código QR con la app **Expo Go** (disponible en App Store / Play Store).

## Estructura (expo-router — cada archivo en `app/` es una pantalla)

```
app/
├── app/
│   ├── _layout.tsx   # Layout raíz / navegación
│   └── index.tsx     # Pantalla inicial
├── package.json
├── app.json
└── tailwind.config.js
```

Para agregar una pantalla nueva, crea un archivo dentro de `app/app/` (ej. `app/app/onboarding.tsx`)
y automáticamente queda disponible como ruta.
