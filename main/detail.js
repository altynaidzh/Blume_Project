const API = "http://localhost:3000/flowers";
const detailBlock = document.getElementById("detail");

async function getOneGood(id) {
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();
  console.log(data);
  detailBlock.innerHTML = `
  <div class="card mb-3 mt-5" style="max-width: 1300px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5> 
        <br>
        <p class="fw-bold">Что вас ждет?</p>
        <p class="card-text fst-italic fst-italic">${data.description}</p>
        <p>Хотите очаровать любимого человека уникальным подарком? С нашим великолепным букетом "${data.title}" вам это гарантировано удастся! Впечатляющая композиция состоит из: ${data.description}. </p>
        <br>
        <p class="fw-bold">Цена</p>
        <p class="card-text" >${data.price}</></p>
        <br>
        <a href="#" class="btn btn-outline-success">В корзину</a>
      </div>
    </div>
  </div>
</div>`;
}

const id = localStorage.getItem("detail-id");
getOneGood(id);
