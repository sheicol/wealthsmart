# WealthSmart — Backend

API en FastAPI. Sirve tanto para el prototipo como para producción — mismo código, sin reescribir.

## Setup local

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
```

## Correr el servidor

```powershell
uvicorn main:app --reload
```

Abre `http://localhost:8000` — deberías ver `{"message": "WealthSmart API — activo"}`.
Docs interactivas (Swagger) en `http://localhost:8000/docs`.

## Estructura

```
backend/
├── main.py              # Punto de entrada
├── app/
│   ├── routers/         # Endpoints (health, transacciones, recomendaciones, etc.)
│   └── models/          # Modelos de datos (SQLAlchemy / Pydantic)
├── requirements.txt
└── .env.example
```
