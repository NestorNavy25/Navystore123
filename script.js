// Catálogo público: agrega prendas al archivo productos.js y publica los cambios en GitHub.
// No se utiliza localStorage: todos los visitantes ven el mismo catálogo publicado.
const products = NAVYSTORE_PRODUCTS.filter(p => p.available && !p.deleted).map(p => ({
  emoji: p.category === 'mujer' ? '👗' : '👕',
  colors: ['#e6e9ec', '#b7c6d5'],
  tag: '',
  ...p,
  id: String(p.id),
  category: String(p.category).toLowerCase(),
  stock: p.stock || {}
}));
const categoryLabel = p => ({hombre: 'Hombre', mujer: 'Mujer', unisex: 'Unisex'}[p.category] || 'Unisex');
const inStock=(p,size)=>Number(p.stock?.[size]||0)>0;
const sizesAvailable=p=>p.sizes.filter(size=>inStock(p,size));
const escapeHtml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// IMPORTANTE: reemplaza con tu número de WhatsApp en formato internacional, sin + ni espacios.
// Número configurado de NavyStore (Guatemala).
const WHATSAPP_NUMBER = '50246699861';
// Para agregar más vistas: en cada producto incluye photos:['imagenes/foto1.jpg','imagenes/foto2.jpg']
// Publica únicamente precios, tallas y existencias confirmados.
const cart = [];
let selectedProduct = null;
let selectedPhoto = 0;
let previousFocus = null;
const $ = selector => document.querySelector(selector);
const money = n => 'Q' + n.toFixed(2);
$('#year').textContent = new Date().getFullYear();
function renderProducts(filter='todos'){
  const visible = products.filter(p=>p.available && !p.deleted && p.image && sizesAvailable(p).length && !p.tag?.includes('PENDIENTE') && (filter==='todos'||p.category===filter));
  $('#products').innerHTML = visible.length ? visible.map(p=>`
    <article class="product-card"><div class="product-image" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">${!sizesAvailable(p).length?'<span class="tag">AGOTADO</span>':p.tag?`<span class="tag">${escapeHtml(p.tag)}</span>`:''}<img class="product-photo" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="shape" role="img" aria-label="Imagen pendiente de ${escapeHtml(p.name)}" hidden>${escapeHtml(p.emoji)}</span></div>
    <div class="product-info"><small>${categoryLabel(p)}</small><h3>${escapeHtml(p.name)}</h3><span class="price">${money(p.price)}</span><button class="view-detail" data-detail="${p.id}">Ver detalles y fotos →</button><div class="purchase-row"><select id="size-${p.id}" aria-label="Talla de ${escapeHtml(p.name)}">${sizesAvailable(p).map(s=>`<option value="${escapeHtml(s)}" ${s==='M'?'selected':''}>${escapeHtml(s)}</option>`).join('')}</select><button data-add="${p.id}" ${sizesAvailable(p).length?"":"disabled"}>${sizesAvailable(p).length?"Agregar +":"Agotado"}</button></div></div></article>`).join('') : '<p class="empty">Aún no hay prendas publicadas en esta categoría. Pronto encontrarás novedades.</p>';
}
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2300)}
function renderCart(){
  $('#cartCount').textContent=cart.reduce((sum,item)=>sum+item.quantity,0);
  $('#cartItems').innerHTML=cart.length?cart.map((item,i)=>`<div class="cart-line"><div><strong>${escapeHtml(item.name)}</strong><small>Talla ${escapeHtml(item.size)} · Cantidad ${item.quantity}</small><br><button class="remove" data-remove="${i}">Eliminar</button></div><strong>${money(item.price*item.quantity)}</strong></div>`).join(''):'<p class="empty">Tu carrito está vacío. ¡Explora la colección!</p>';
  $('#cartTotal').textContent=money(cart.reduce((sum,item)=>sum+item.price*item.quantity,0));
  $('#checkout').disabled=cart.length===0;
}
function toggleCart(open){$('#cartPanel').classList.toggle('open',open);$('#cartPanel').setAttribute('aria-hidden',String(!open));$('#overlay').hidden=!open;document.body.style.overflow=open?'hidden':''}
function photosFor(p){return p.photos && p.photos.length ? p.photos : [p.image]}
function showProduct(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  selectedProduct=p;selectedPhoto=0;previousFocus=document.activeElement;
  const photos=photosFor(p);
  const description=p.description || (p.category==='hombre'?'Prenda casual para hombre, ideal para combinar con diferentes estilos.':'Prenda para mujer, perfecta para combinar con tu estilo diario.');
  $('#productDetail').innerHTML=`<div class="detail-layout">
    <div class="detail-gallery"><div class="detail-main"><img id="detailMainPhoto" src="${escapeHtml(photos[0])}" alt="${escapeHtml(p.name)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="detail-placeholder" hidden>${escapeHtml(p.emoji)}</span></div>
    <div class="detail-thumbs">${photos.map((src,i)=>`<button class="detail-thumb ${i===0?'active':''}" data-photo="${i}" aria-label="Ver fotografía ${i+1}"><img src="${escapeHtml(src)}" alt="Vista ${i+1} de ${escapeHtml(p.name)}" onerror="this.hidden=true"></button>`).join('')}</div>
    <p class="detail-hint">${photos.length===1?'Por ahora hay una fotografía de este producto.':'Selecciona una miniatura para ver más fotografías.'}</p></div>
    <div class="detail-content"><span class="eyebrow">NAVYSTORE · ${categoryLabel(p).toUpperCase()}</span><h2>${escapeHtml(p.name)}</h2><strong class="detail-price">${money(p.price)}</strong><p>${escapeHtml(description)}</p>
    <p class="detail-note">Confirma disponibilidad y envío al realizar tu pedido por WhatsApp.</p><label for="detailSize">Selecciona tu talla</label><select id="detailSize">${sizesAvailable(p).map(s=>`<option value="${escapeHtml(s)}" ${s==='M'?'selected':''}>${escapeHtml(s)}</option>`).join('')}</select>
    <button class="primary detail-add" id="detailAdd" ${sizesAvailable(p).length?"":"disabled"}>${sizesAvailable(p).length?"Agregar al carrito 🛍️":"Agotado"}</button><p class="detail-hint">El pedido se confirma por WhatsApp. No se cobra desde esta página.</p></div></div>`;
  $('#productOverlay').hidden=false;$('#productModal').classList.add('open');$('#productModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#closeProduct').focus();
}
function closeProduct(){
  $('#productModal').classList.remove('open');$('#productModal').setAttribute('aria-hidden','true');$('#productOverlay').hidden=true;document.body.style.overflow='';selectedProduct=null;if(previousFocus)previousFocus.focus();
}
function addToCart(p,size){if(!p.available||p.deleted||!inStock(p,size)){showToast('Talla agotada o producto no disponible');return}const inCart=cart.find(x=>x.id===p.id&&x.size===size)?.quantity||0;if(inCart>=p.stock[size]){showToast('No hay más unidades disponibles de esa talla');return}const existing=cart.find(x=>x.id===p.id&&x.size===size);if(existing)existing.quantity++;else cart.push({...p,size,quantity:1});renderCart();showToast('¡Producto agregado al carrito!')}
$('#closeProduct').addEventListener('click',closeProduct);
$('#productOverlay').addEventListener('click',closeProduct);
$('#productDetail').addEventListener('click',e=>{
  const photo=e.target.closest('[data-photo]');
  if(photo&&selectedProduct){selectedPhoto=Number(photo.dataset.photo);$('#detailMainPhoto').src=photosFor(selectedProduct)[selectedPhoto];$('#detailMainPhoto').hidden=false;$('#detailMainPhoto').nextElementSibling.hidden=true;document.querySelectorAll('.detail-thumb').forEach(b=>b.classList.toggle('active',b===photo))}
  if(e.target.closest('#detailAdd')&&selectedProduct){addToCart(selectedProduct,$('#detailSize').value);closeProduct();toggleCart(true)}
});
document.addEventListener('click',e=>{
  const detail=e.target.closest('[data-detail]');if(detail)showProduct(detail.dataset.detail);
  const filter=e.target.closest('[data-filter]');if(filter){document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===filter));renderProducts(filter.dataset.filter)}
  const add=e.target.closest('[data-add]');if(add){const p=products.find(x=>x.id===add.dataset.add);if(!p)return;const size=$(`#size-${p.id}`).value;addToCart(p,size)}
  const remove=e.target.closest('[data-remove]');if(remove){cart.splice(Number(remove.dataset.remove),1);renderCart()}
});
$('#cartButton').addEventListener('click',()=>toggleCart(true));$('#closeCart').addEventListener('click',()=>toggleCart(false));$('#overlay').addEventListener('click',()=>toggleCart(false));document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(selectedProduct)closeProduct();else toggleCart(false)}});
$('#checkout').addEventListener('click',()=>{
  if(!cart.length)return;
  if(cart.some(x=>{const p=products.find(p=>p.id===x.id);return !p||p.deleted||!p.available||x.quantity>Number(p.stock?.[x.size]||0)})){showToast('Revisa las existencias antes de pedir');return}
  if(!/^\d{10,15}$/.test(WHATSAPP_NUMBER)){showToast('Configura tu número de WhatsApp en script.js');return}
  const lines=cart.map(x=>`• ${x.name} | Talla ${x.size} | ${x.quantity} x ${money(x.price)} = ${money(x.quantity*x.price)}`);
  const total=cart.reduce((s,x)=>s+x.price*x.quantity,0);
  const message=`¡Hola, Navystore! Quiero hacer un pedido:\n\n${lines.join('\n')}\n\nTotal: ${money(total)}\n\n¿Me confirman disponibilidad y costo de envío?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
});

renderProducts();renderCart();
