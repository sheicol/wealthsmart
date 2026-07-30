# WealthSmart

> Asesoria financiera personal con IA para Colombia - construida sobre Open Finance (Decreto 0368 de 2026).

**Dominio:** [getwealthsmart.co](https://getwealthsmart.co)

## Que es WealthSmart?

WealthSmart es una app que conecta con tus cuentas bancarias via Open Finance y te dice exactamente que hacer con tu plata esta semana. Sin jerga. Sin juicio. Con IA.

## El problema

Los colombianos con ingresos medios-altos no tienen acceso a asesoria financiera personalizada. Los asesores son para ricos. Las apps genericas no entienden el contexto colombiano. El resultado: plata que desaparece sin que nadie sepa por que.

## La solucion

Una IA que analiza tus movimientos reales, entiende tu situacion y te da un plan accionable - no teoria general.

## Equipo

| Nombre | Rol | Perfil |
|--------|-----|--------|
| Shey Colina | CEO + CTO | Abogada, Master Derecho Internacional (U. Barcelona), Data Science (Carlemany 2027) |
| Manuel | CCO | ~2 anos en ventas sector salud |

## Stack tecnologico

- **App (iOS + Android + Web):** Expo (React Native + React Native Web) + NativeWind — una sola base de codigo para las tres plataformas, desde el prototipo hasta produccion
- **Backend:** Python + FastAPI + PostgreSQL
- **Motor de recomendaciones:** Claude API
- **Datos bancarios:** Open Finance — ACH Colombia sandbox

## Estado actual

Pre-producto - construyendo el prototipo funcional directamente en el stack final (sin herramientas de mockup desechables)

## Estructura del repositorio

```
wealthsmart/
├── app/               # App Expo (React Native + Web) - iOS, Android, Web
├── backend/           # API FastAPI
├── docs/              # Documentacion del proyecto
│   ├── valentina.md       # Perfil de usuario primario
│   ├── roadmap.md         # Plan semana a semana
│   ├── entrevistas.md     # Guia de entrevistas de validacion
│   ├── objeciones-faq.md  # Objeciones y respuestas
│   ├── contenido-redes.md # Estado de marketing/contenido
│   └── setup-cuentas.md   # Registro de cuentas y credenciales (IDs publicos)
```

---

*Capital inicial: $25M COP | Ciudad: Medellin, Colombia*
