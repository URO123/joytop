const elUz = document.querySelector('.uzru');
const elBtn = document.querySelector('.list-item__two-uz');
elBtn.addEventListener('click',function(){
    elUz.classList.toggle('uzbek')
});

const elMaqola = document.querySelector('.maqolalar');
const elBtn2 = document.querySelector('.item__link');
elBtn2.addEventListener('click',function(){
    elMaqola.classList.toggle('block')
});




const elList = document.querySelector('.hotels__list')


let hotels = [{
  name: `O'ZBEKISTON OTEL`,
  som: `-so'm`,
  star: '4',
  price: '732000',
  loc: './images/map.svg',
  location: `O'zbekiston,Toshkent shahar,Mirzo
  Ulug‘bek`,
  img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
  date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
{
    name: `O'ZBEKISTON OTEL`,
    som: `-so'm`,
    star: '4',
    price: '732000',
    loc: './images/map.svg',
    location: `O'zbekiston,Toshkent shahar,Mirzo
    Ulug‘bek`,
    img:'https://api.joytop.uz/api/v1/attach/open/31349dd8-f800-453d-812d-281acf608221',
    date:'2023-05-29',
},
];



for (let i of hotels) {
    const elLink = document.createElement('a');
  const elItem = document.createElement('li');
  const elImage = document.createElement('img');
  const elLoc = document.createElement('img');
  const elName = document.createElement('p');
  const elPrice = document.createElement('p');
  const elLocation = document.createElement('a');
  const elSom = document.createElement('p');
  const elStar = document.createElement('p');
  const elDate = document.createElement('p');
  const elBox = document.createElement('div');
  elItem.setAttribute('class', 'hotels__item')
  elImage.setAttribute('class', 'hotels__img')
  elName.setAttribute('class', 'item__name')
  elPrice.setAttribute('class', 'item__price')
  elStar.setAttribute('class', 'item__star')
  elSom.setAttribute('class', 'item__som')
  elDate.setAttribute('class', 'item__date')
  elBox.setAttribute('class', 'item__box')
  elLocation.setAttribute('class', 'item__location')
  elLink.setAttribute('class', 'item__link')
  elImage.src = i.img
  elName.innerHTML = i.name
  elPrice.innerHTML = `Boshlang'ich narxi: ${i.price}`
  elLoc.src = i.loc
  elLocation.innerHTML = i.location
  elStar.innerHTML = `${i.star} yulduz`
  elSom.innerHTML = `Dam olish kunlari: ${i.som}`
  elDate.innerHTML = i.date
  elLink.href = i.href
  elLink.appendChild(elImage)
  elLink.appendChild(elName)
  elLink.appendChild(elSom)
  elLink.appendChild(elStar)
  elLink.appendChild(elPrice)
  elBox.appendChild(elLoc)
  elBox.appendChild(elLocation)
  elLink.appendChild(elBox)
  elLink.appendChild(elDate)
  elItem.appendChild(elLink)
  elList.appendChild(elItem)
}