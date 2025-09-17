# Aplicación de Contador en React

Esta es una aplicación sencilla creada con **React** y estilizada con **Tailwind CSS** que implementa un contador interactivo con botones para incrementar, decrementar y resetear el valor del contador.

---

## ¿De qué trata esta aplicación?

La aplicación muestra un número que representa un contador. Puedes aumentarlo o disminuirlo usando los botones que incrementan o decrementan el contador en diferentes cantidades (1, 3, 100, 200). También cuenta con un botón para reiniciar el contador a cero.

---

## Funcionalidades

- Incrementar el contador en cantidades variables (+1, +3, +100, +200).
- Disminuir el contador en esas mismas cantidades.
- Resetear el contador a cero.
- Interfaz limpia y responsiva gracias a Tailwind CSS.

---

## Tecnologías usadas

- React (funcional y hooks: `useState`)
- Tailwind CSS para estilos rápidos y responsivos.
- Create React App como base del proyecto.

---

## Cómo usar la aplicación

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el proyecto con `npm start`
4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)
5. Usa los botones para controlar el contador.

---

## Estructura del código

- `Counter.js`: Componente principal que mantiene el estado del contador y contiene los botones para incrementar y resetear.
- `CounterButton.js`: Componente que representa cada botón que incrementa o decrementa el contador en una cantidad dada.

---

## Scripts disponibles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm test`: Ejecuta pruebas.
- `npm run build`: Crea una versión optimizada para producción.
- `npm run eject`: Expone toda la configuración del proyecto para personalización avanzada.
