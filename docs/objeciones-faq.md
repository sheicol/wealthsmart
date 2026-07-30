# ❓ Objeciones y FAQ — WealthSmart

> Documento vivo. Agregar cada objeción que aparezca en entrevistas, redes o conversaciones con usuarios potenciales.

---

## 🔐 Seguridad y privacidad

### "¿La IA puede vaciarme la cuenta?"

**Respuesta corta:** No. Es técnicamente imposible.

**Respuesta completa:**
WealthSmart se conecta a tus cuentas bancarias mediante Open Finance (Decreto 0368 de 2026), que por ley solo permite acceso de **solo lectura**. La API bancaria expone tus movimientos y saldos, nunca las funciones de transacción. WealthSmart puede ver tu plata, no tocarla. Ni siquiera si quisiéramos podríamos hacerlo — es la arquitectura del sistema financiero colombiano, no una promesa nuestra.

**Analogía para usuarios:**
*"Es como darle acceso a tu contador para ver tus extractos. Puede leer todo, no puede mover nada."*

**Cómo comunicarlo en la app:**
- Mostrar explícitamente los permisos concedidos vs. los que no existen
- Pantalla de onboarding dedicada a explicar qué puede y qué no puede hacer WealthSmart
- Badge de "Solo lectura" visible en la pantalla de cuentas conectadas

---

### "¿Qué pasa con mis datos? ¿Los venden?"

**Respuesta:**
Tus datos financieros son tuyos. WealthSmart los usa exclusivamente para generar tus recomendaciones personales. No los vendemos, no los compartimos con terceros, no los usamos para publicidad.

**Marco legal:**
- Ley 1581 de 2012 — Protección de Datos Personales (Colombia)
- Política de privacidad clara y en lenguaje simple (no en letra pequeña)

---

### "¿Es seguro conectar mi cuenta bancaria a una app?"

**Respuesta:**
Open Finance es un estándar regulado por la Superintendencia Financiera de Colombia. Los mismos bancos son los que exponen las APIs — no es un acceso de terceros sin control. Es el mismo nivel de seguridad que cuando entras a tu app del banco.

**Acción pendiente:** Tramitar aval de la SFC cuando se llegue a MVP (Semana 12+).

---

## 💰 Precio y valor

### "¿Por qué pagar por esto si hay apps gratis?"

*(Por completar después de entrevistas)*

---

### "¿Cómo sé que los consejos son buenos si no es un asesor humano?"

*(Por completar después de entrevistas)*

---

## 🤖 La IA

### "¿Entiende mi situación específica o es consejo genérico?"

*(Por completar después de entrevistas)*

---

*Agregar nuevas objeciones después de cada entrevista o interacción con usuarios.*
