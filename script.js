function buscarLibro() {
  const id = document.getElementById('buscador').value;
  fetch(`http://127.0.0.1:8000/libros/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Libro no encontrado");
      return res.json();
    })
    .then(data => {
      document.getElementById('resultado').innerHTML = `
        <h2>${data.titulo}</h2>
        <p><strong>Autor:</strong> ${data.autor}</p>
        <p><strong>ID:</strong> ${data.id}</p>
      `;
    })
    .catch(err => {
      document.getElementById('resultado').innerText = err.message;
    });
}
