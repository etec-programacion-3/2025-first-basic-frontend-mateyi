# 📚 Biblioteca Virtual – Frontend

Este es el **frontend** del proyecto *Biblioteca Virtual*, una aplicación web que permite buscar libros por ID y visualizar su información. El sistema se conecta a un **backend en FastAPI** que sirve los datos desde una API REST.

---

## 🚀 Pasos para ejecutar el proyecto

### 1. Clonar el repositorio del backend

```bash
git clone https://github.com/etec-programacion-3/2025-first-backend-mate-gimenez.git
cd 2025-first-backend-mate-gimenez

2. Crear entorno virtual e instalar dependencias

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

3. Iniciar el backend

uvicorn main:app --reload

4. Clonar el repositorio del frontend

Abrí otra terminal y ejecutá:

git clone https://github.com/etec-programacion-3/2025-first-basic-frontend-mateyi.git
cd 2025-first-basic-frontend-mateyi

5. Probar el frontend

Abrí el archivo index.html con tu navegador:

firefox index.html

Cómo funciona

    El frontend tiene una caja para ingresar el ID del libro.

    Cuando presionás "Buscar", se hace una solicitud al backend (http://127.0.0.1:8000/libros/<ID>).

    Si el libro existe, se muestran sus datos (título, autor y año).

    Si no existe, aparece el mensaje: 📕 "Libro no encontrado."

    Repositorios del proyecto

    🔙 Backend: https://github.com/etec-programacion-3/2025-first-backend-mate-gimenez
    Frontend: Repositorios del proyecto

    🔙 Backend: https://github.com/etec-programacion-3/2025-first-basic-frontend-mateyi