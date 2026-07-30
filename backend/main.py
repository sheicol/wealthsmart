"""
WealthSmart — Backend API
Punto de entrada de la aplicación FastAPI.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health

app = FastAPI(
    title="WealthSmart API",
    description="Backend de WealthSmart — asesor financiero inteligente para Colombia",
    version="0.1.0",
)

# CORS abierto en desarrollo. Restringir dominios antes de producción.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)


@app.get("/")
def root():
    return {"message": "WealthSmart API — activo"}
