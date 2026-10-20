# NavyStore — catálogo desde GitHub

Tienda estática con carrito y pedidos al WhatsApp 50246699861. El catálogo se edita únicamente en productos.js. No incluye administrador. Conserva las 10 fotos y fichas para completar: permanecen ocultas hasta que publiques datos reales.

## Subir y publicar
1. Descomprime este ZIP.
2. En GitHub crea un repositorio llamado navystore.
3. Pulsa Add file → Upload files y arrastra el CONTENIDO de la carpeta: index.html debe quedar en la raíz del repositorio, junto a productos.js, script.js, styles.css y la carpeta imagenes. No subas el ZIP.
4. Pulsa Commit changes.
5. En Settings → Pages → Build and deployment selecciona Deploy from a branch, rama main y carpeta /(root). Pulsa Save.
6. Cuando finalice la publicación, Pages mostrará el enlace de tu tienda. Las actualizaciones pueden tardar unos minutos.

## Editar una prenda desde GitHub
Abre productos.js → botón del lápiz (Edit this file). Completa la ficha correspondiente y pulsa Commit changes. Ejemplo de ficha completa:

```javascript
{
  id: "prenda-001",
  name: "Camisa azul",
  price: 125,
  category: "hombre",
  sizes: ["S", "M", "L"],
  stock: { S: 2, M: 3, L: 1 },
  description: "Camisa azul de manga corta.",
  image: "imagenes/prenda-001.jpeg",
  photos: ["imagenes/prenda-001.jpeg"],
  available: true
}
```

- price: escribe solo el número, sin Q ni comillas.
- category: usa "hombre", "mujer" o "unisex", en minúsculas.
- sizes: tallas que ofreces. stock: cantidad por cada talla, con nombres idénticos.
- available: true para publicar; false para ocultar.
- Cada id debe ser único y estar entre comillas rectas ".
- Conserva las comas entre campos y entre fichas; no borres los corchetes que rodean la lista.
- No cambies los nombres de los campos, como name, price o stock.

## Agregar una prenda
1. Abre imagenes en GitHub y usa Add file → Upload files para subir la foto.
2. En productos.js copia una ficha completa, separada de la anterior por una coma.
3. Usa otro id, por ejemplo "prenda-011", y completa sus datos.
4. Escribe el nombre exacto de la foto, incluyendo extensión y mayúsculas, tanto en image como en photos.
5. Para varias fotos: photos: ["imagenes/frente.jpeg", "imagenes/espalda.jpeg"].
6. Confirma los cambios y revisa la publicación de Pages.

## Vender, ocultar o eliminar
Después de cada venta, actualiza las cantidades en stock y confirma los cambios.
Una talla con stock 0 deja de ofrecerse. Una prenda sin ninguna talla con existencias se oculta.
Para ocultar una ficha, usa available: false.
Para eliminarla definitivamente, borra su bloque { ... } y ajusta las comas de la lista. Puedes borrar también sus fotografías si ninguna otra ficha las utiliza.

## Comprobar la tienda
Revisa Todos, Hombres, Mujeres y Unisex; abre una ficha, elige talla, agrega al carrito y comprueba el total.
El botón Pedir por WhatsApp abre un mensaje: el cliente debe enviarlo para solicitar el pedido.
El carrito no reserva ni descuenta existencias automáticamente. Confirma disponibilidad y envío por WhatsApp.
Todos los visitantes ven el catálogo de la versión publicada; no se guarda inventario en el navegador.

## Archivos
- productos.js: datos del catálogo.
- imagenes/: fotografías.
- script.js: funcionamiento del carrito y constante WHATSAPP_NUMBER.
- styles.css: apariencia.
- index.html: contenido principal.
- .nojekyll: compatibilidad con publicación estática.

GitHub Pages publica archivos estáticos. No incluyas contraseñas, tokens ni información privada en estos archivos.
