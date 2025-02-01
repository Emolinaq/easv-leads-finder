# EASV Leads Finder - Frontend

## Descripción del Proyecto

EASV Leads Finder es una herramienta diseñada para ayudar a usuarios (como vendedores o especialistas en marketing) a encontrar y cualificar leads de empresas y profesionales de manera rápida y eficiente. El frontend de la aplicación está construido con Next.js y utiliza Tailwind CSS para los estilos.

### Características Principales

Búsqueda de Leads: Permite buscar empresas y profesionales por sector, nicho, ubicación y cargo.

Cualificación de Leads: Evalúa perfiles de LinkedIn y empresas basándose en criterios como trayectoria, tamaño de la empresa y relevancia.

Exportación de Datos: Exporta la información recolectada a CSV o Excel.

Pantallas de Autenticación: Inicio de sesión y registro de usuarios.

Páginas Informativas: Contacto, Términos y Condiciones, y Política de Privacidad.

### Tecnologías Utilizadas
Next.js: Framework de React para renderizado del lado del servidor y enrutamiento.

Tailwind CSS: Librería de utilidades para estilizar la aplicación de manera rápida y eficiente.

React: Librería de JavaScript para construir interfaces de usuario.

Turbopack: Empaquetador rápido para desarrollo con Next.js.

### Estructura del Proyecto
```bash
easv-leads-finder/
├── app/
│   ├── contacto/
│   ├── detalles/
│   ├── login/
│   ├── politica-privacidad/
│   ├── profile/
│   ├── register/
│   ├── splash/
│   ├── terminos/
│   ├── welcome/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Footer.js
│   ├── Header.js
│   ├── LeadCard.js
│   ├── Loading.js
│   └── SearchBar.js
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── windows.svg
├── .gitignore
├── eslint.config.js
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

### Configuración del Entorno de Desarrollo

#### Requisitos Previos

Node.js: Asegúrate de tener Node.js instalado (versión 16 o superior).

npm: Gestor de paquetes de Node.js.

#### Instalación

Clona el repositorio:
```bash

git clone https://github.com/tu-usuario/easv-leads-finder.git
```
Navega al directorio del proyecto:
```bash

cd easv-leads-finder
```
Instala las dependencias:
```bash

npm install
```
Ejecución
Inicia el servidor de desarrollo:
```bash

npm run dev
```
Abre tu navegador y visita:

http://localhost:3000

#### Scripts Disponibles

```bash
npm run dev: Inicia el servidor de desarrollo con Turbopack.

npm run build: Compila la aplicación para producción.

npm start: Inicia la aplicación en modo producción.

npm lint: Ejecuta ESLint para verificar el código.
```

### Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añade nueva funcionalidad').

Sube tus cambios a la rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.

### Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE).

### Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Enrique Molina 

GitHub: Emolinaq

¡Gracias por revisar el proyecto! 😊