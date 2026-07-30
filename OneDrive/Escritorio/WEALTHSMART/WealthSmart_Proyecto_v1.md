# WealthSmart — Asesor Financiero con IA para la Clase Media Colombiana
### Fundadora: Shey Colina | Medellín, Colombia | 2026
### Versión 1.0 — Proyecto B2C

---

> **Modelo de negocio:** B2C — directamente al consumidor final.
> **Complemento estratégico:** Usa la misma infraestructura de Open Finance de ScoreIA.

---

## La Idea en Una Frase

> *"El asesor financiero inteligente que Colombia nunca tuvo — personalizado, accesible, y que trabaja 24/7 para que tu plata rinda más."*

---

## El Dolor Real

Hay en Colombia una clase media silenciosa — personas que ganan entre $3 y $12 millones COP al mes — que nunca ha tenido acceso a asesoría financiera de verdad.

Los bancos les ofrecen CDTs al 10% mientras la inflación los alcanza. Los asesores financieros privados cobran desde $500.000 COP por sesión y gestionan portafolios mínimos de $100 millones. Las apps de inversión que existen (Tyba, Flink) son básicas: solo permiten comprar fondos, pero no te dicen qué hacer con tu vida financiera completa.

**El resultado:** Esta persona ahorra poco, invierte mal, no tiene plan de retiro, y toma decisiones financieras basadas en el consejo del vecino o en un video de TikTok.

### El tamaño del problema

- Colombia tiene más de **8 millones de personas** en este rango de ingresos
- Solo el **12%** tiene algún tipo de inversión distinta a CDT o finca raíz
- El **68%** no tiene plan de retiro estructurado
- El mercado de gestión de patrimonio en LatAm crecerá a **USD 240 mil millones para 2035**

---

## Qué es WealthSmart

Una aplicación móvil con IA que actúa como asesor financiero personal:

**1. Conecta todos tus datos** (vía Open Finance — con tu permiso)
Agrega cuentas bancarias, tarjetas, inversiones, deudas y gastos de múltiples instituciones en un solo lugar.

**2. Entiende tu situación real**
La IA analiza tus ingresos, gastos, deudas y activos — y construye tu perfil financiero completo automáticamente.

**3. Te dice exactamente qué hacer**
No solo muestra gráficas. Te da recomendaciones concretas y personalizadas:
- *"Tienes $800.000 COP ociosos en tu cuenta de ahorros — ponlos aquí y ganas 3x más"*
- *"Tu deuda de tarjeta te cuesta $180.000 COP al mes en intereses — abónala antes que cualquier ahorro"*
- *"Con tu ritmo de ahorro actual, te jubilas a los 74. Aquí está el plan para hacerlo a los 62"*

**4. Ejecuta o facilita la ejecución**
Conecta con productos financieros reales (fondos, ETFs, CDTs, seguros) y te permite actuar desde la misma app.

**5. Aprende y evoluciona**
Cada mes el modelo aprende más de tu comportamiento y refina sus recomendaciones.

---

## Por Qué la IA lo Cambia Todo

Un asesor financiero humano cobra $500.000 COP por hora y atiende 20-30 clientes. WealthSmart atiende a 1 millón de personas al mismo costo marginal de infraestructura. La IA democratiza lo que antes era exclusivo para ricos.

Además, con Open Finance (Decreto 0368 de 2026), WealthSmart puede ver datos de todos los bancos del usuario — algo que ni el asesor más dedicado podía hacer antes.

---

## Diferencia con lo que ya existe

| App / Servicio | Qué hace | Por qué no es suficiente |
|---|---|---|
| **Tyba** | Inversión en fondos | Solo inversión, sin asesoría completa |
| **Flink** | Compra de acciones y ETFs | Solo ejecución, sin plan personalizado |
| **Bancolombia App** | Gestión de cuenta propia | Un solo banco, sin visión 360° |
| **Asesor financiero privado** | Plan completo | Costoso ($500K+/sesión), solo para ricos |
| **WealthSmart** ✅ | Plan completo + ejecución + IA + Open Finance | Todo en uno, asequible, automatizado |

---

## Modelo de Negocio B2C

### Fuentes de ingresos

**1. Suscripción mensual (ingreso principal)**

| Plan | Precio | Qué incluye |
|---|---|---|
| **Free** | $0 | Conexión 2 cuentas, dashboard básico |
| **Smart** | $29.900 COP/mes | Todas las cuentas, recomendaciones IA, alertas |
| **Pro** | $59.900 COP/mes | Todo Smart + simulador de retiro + optimización fiscal |

**2. Comisión por referidos (ingreso secundario)**
Cuando WealthSmart recomienda un CDT, fondo o seguro y el usuario lo contrata, cobra comisión del proveedor (modelo similar a comparadores de seguros).

**3. WealthSmart Premium Partnerships**
Alianzas con fondos de inversión, aseguradoras y bancos para colocar productos a usuarios calificados.

### Proyección de ingresos (conservadora)

| Año | Usuarios activos | Conversión a pago | Ingreso mensual | Ingreso anual |
|---|---|---|---|---|
| Año 1 | 2.000 | 15% → 300 pagos | $8.970.000 COP | $107.640.000 COP |
| Año 2 | 15.000 | 20% → 3.000 pagos | $89.700.000 COP | $1.076.400.000 COP |
| Año 3 | 60.000 | 25% → 15.000 pagos | $448.500.000 COP | $5.382.000.000 COP |

*Año 3: más de $5.000 millones COP anuales con 60.000 usuarios activos.*

---

## Arquitectura Técnica

### Stack

| Capa | Tecnología |
|---|---|
| App móvil | React Native (iOS + Android en un solo código) |
| Backend | Python + FastAPI |
| IA / Recomendaciones | LLM fine-tuneado (GPT-4 o Claude API) + modelos de optimización financiera |
| Agregación bancaria | APIs Open Finance (Decreto 0368) + ACH Colombia |
| Base de datos | PostgreSQL + cifrado en reposo |
| Infraestructura | AWS (escalable desde el día 1) |
| Seguridad | OAuth 2.0 + biometría + cifrado AES-256 |

### La IA de WealthSmart — Cómo piensa

```
Datos del usuario (Open Finance)
         │
         ▼
  Limpieza y normalización
         │
         ▼
  Clasificación de gastos (ML)
  Detección de patrones (serie temporal)
  Scoring de salud financiera (0-100)
         │
         ▼
  Motor de recomendaciones
  (optimización de portafolio + NLP)
         │
         ▼
  Recomendación personalizada
  en lenguaje natural
         │
         ▼
  Usuario toma acción
  (o la app ejecuta automáticamente)
```

---

## Hoja de Ruta — 3 Fases

### FASE 0 — Prototipo y validación (Ahora → 6 meses)
*Costo: $0 – $3M COP*

- [ ] Definir el perfil de usuario primario (mujer 28-40, Medellín, ingresos $4-8M COP)
- [ ] Entrevistar 20 personas del perfil — ¿qué decisión financiera las quita el sueño?
- [ ] Construir prototipo sin código (Figma) — flujo completo de la app
- [ ] Validar con 50 usuarios beta (amigos, familia, redes)
- [ ] Construir MVP en Python: clasificación de gastos + recomendación básica
- [ ] Conectar con Open Finance (sandbox de ACH Colombia — gratuito para testing)
- [ ] Lanzar lista de espera — objetivo: 500 personas antes del lanzamiento

**Meta:** 500 personas en lista de espera + prototipo validado.

---

### FASE 1 — Lanzamiento y primeros usuarios (Meses 7-18)
*Capital: $20 – $50M COP*

- [ ] Desarrollo de app móvil (React Native)
- [ ] Integración Open Finance real con bancos colombianos
- [ ] Lanzamiento cerrado en Medellín (1.000 usuarios)
- [ ] Iterar basado en feedback semanal
- [ ] Modelo de suscripción activo
- [ ] Aplicar a iNNpulsa / Ruta N para financiación

**Meta:** 2.000 usuarios activos, 300 de pago, primeros ingresos reales.

---

### FASE 2 — Escala nacional (Meses 19-36)
*Capital: ronda de inversión*

- [ ] Expansión a Bogotá, Cali, Barranquilla
- [ ] Módulo de retiro y pensión voluntaria
- [ ] Alianzas con fondos de inversión y aseguradoras
- [ ] Explorar expansión a Perú y Chile (mercados similares)
- [ ] Objetivo: 60.000 usuarios activos

---

## Capital Requerido

| Etapa | Capital | Fuente |
|---|---|---|
| Fase 0 — Prototipo | $0 – $3M COP | Tu tiempo + tools gratuitas |
| Fase 1 — Lanzamiento | $20 – $50M COP | iNNpulsa, ángeles, Ruta N |
| Fase 2 — Escala | $500M+ COP | Serie A de VC |
| **Total acumulado** | **~$20 – $53M COP** | Mixto |

> ⚠️ **Nota importante:** WealthSmart requiere cumplir con la regulación de valores (AMV — Autoregulador del Mercado de Valores) si hace recomendaciones de inversión. Esto añade costo y tiempo regulatorio. La estrategia para Fase 0 y 1 es hacer *educación financiera personalizada* (no asesoría formal), lo que no requiere licencia AMV. La asesoría formal viene en Fase 2.

---

## La Conexión Estratégica con ScoreIA

WealthSmart y ScoreIA comparten infraestructura:

| Componente | ScoreIA (B2B) | WealthSmart (B2C) |
|---|---|---|
| Open Finance APIs | ✅ Módulo OpenLens | ✅ Agregación bancaria |
| Modelos de datos financieros | ✅ Scoring de riesgo | ✅ Salud financiera personal |
| Infraestructura AWS | ✅ Compartida | ✅ Compartida |
| Datos que genera | Comportamiento de pago B2B | Comportamiento financiero personal |

**Esto significa:** Los costos de infraestructura se comparten entre los dos proyectos. Lo que construyes para ScoreIA sirve de base para WealthSmart — y viceversa.

---

## Usuario Objetivo (Perfil Principal)

**Nombre:** Valentina, 32 años, Medellín
**Ocupación:** Profesional en empresa mediana, ingreso $5.5M COP/mes
**Situación:** Tiene cuenta en Bancolombia y Nequi. Ahorra $500K/mes "cuando puede". Tiene deuda de tarjeta de $4M COP. Nunca ha invertido. Le da miedo la plata.
**Dolor:** *"Gano bien pero nunca me alcanza. No sé si estoy ahorrando suficiente. No sé nada de inversiones."*
**Lo que WealthSmart le da:** Un plan claro, sin jerga, sin mínimos altos, que le dice exactamente qué hacer con su plata esta semana.

---

## Plan de Trabajo Técnico con Claude

| Proyecto | Descripción | Estado |
|---|---|---|
| **W1** | Prototipo Figma del flujo de usuario | 🔜 Primero |
| **W2** | Clasificador de gastos en Python (ML) | Pendiente |
| **W3** | Motor de recomendaciones básico con LLM | Pendiente |
| **W4** | Conexión con Open Finance sandbox | Pendiente |
| **W5** | App móvil MVP en React Native | Futuro |

---

## Regulación a Tener en Cuenta

| Tema | Regulación | Impacto |
|---|---|---|
| Datos personales | Ley 1581 de 2012 (Habeas Data) | Registrar base de datos en SIC |
| Open Finance | Decreto 0368 de 2026 | Cumplir estándares de APIs y consentimiento |
| Recomendaciones de inversión | AMV (Fase 2) | Solo educación financiera en Fase 0-1 |
| Protección al consumidor | SFC | Términos y condiciones claros |

---

*Versión 1.0 — Julio 2026*
*Próxima acción: Construir W1 — prototipo de flujo de usuario en Figma o wireframe*
