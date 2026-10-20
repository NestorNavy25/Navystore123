// NavyStore: completa los datos de cada prenda antes de publicarla.
// Cambia available a true solo cuando precio, tallas y stock estén correctos.
// Ejemplo: sizes: ["S", "M", "L"], stock: { S: 2, M: 3, L: 1 }
// Usa un id de texto único para cada prenda. Edita este archivo en GitHub.
const NAVYSTORE_PRODUCTS = [
  {
    id: "prenda-001",
    name: "Camisa negra nike",
    price: 125,
    category: "hombre",
    sizes:["S"],
    stock:{ S: 1},
    description: "uso cotidiano",
    image: "https://private-user-images.githubusercontent.com/342706040/679224679-f4a2388b-aef4-4cb3-a629-c1bda85deb3b.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI1MTQxNzcsIm5iZiI6MTc5MjUxMzg3NywicGF0aCI6Ii8zNDI3MDYwNDAvNjc5MjI0Njc5LWY0YTIzODhiLWFlZjQtNGNiMy1hNjI5LWMxYmRhODVkZWIzYi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MTAyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjEwMjBUMTYzMTE3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NDZjODQyZjJhNjc4Zjc0NTc1YmIyMDQwOTIwYTNiNWE2NWNlYWViZGM3YjkyYzJhMTFmZjUxY2M2ZTE0NTA3YSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.VlrYwtMVCYinWxe7ShQnTO16gi-QG94sFZspd0o3V7A,
    photos: ["https://private-user-images.githubusercontent.com/342706040/679224685-3afbe55e-3421-42cd-a0d0-48e5366cf5be.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI1MTM5MjgsIm5iZiI6MTc5MjUxMzYyOCwicGF0aCI6Ii8zNDI3MDYwNDAvNjc5MjI0Njg1LTNhZmJlNTVlLTM0MjEtNDJjZC1hMGQwLTQ4ZTUzNjZjZjViZS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MTAyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjEwMjBUMTYyNzA4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9M2ZkMzkyZjRmYTM3NjE5NDJhOGY1YmUzNDhmNDg1ZjZkNzc0Zjg5ZDhiMWYwOGI3MjI3MGFhOTMxY2Y2NmMxZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.82Xd-R4i7PEbXWeYqaSzIYHMpvatg9GcKZvgc1IP-F8"],
    available:true
  },
 ];
