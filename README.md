# Klaizen

Plataforma de bienestar emocional para centros educativos de secundaria.

## Stack
- React 18 + Vite
- Hosted on Vercel
- Domain: klaizen.eu

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Despliegue

El despliegue es automático en cada `git push` via Vercel.

```bash
npm run build    # comprueba que compila sin errores
git add .
git commit -m "descripción del cambio"
git push
```

## Estructura

```
klaizen/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx       ← toda la aplicación
│   └── main.jsx      ← punto de entrada
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── .gitignore
```
