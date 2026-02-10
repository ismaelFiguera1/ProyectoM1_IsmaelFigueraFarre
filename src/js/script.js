const d = document,
  $boton = d.querySelector("button"),
  $colores = d.querySelectorAll(".color");

$boton.addEventListener("click", () => {
  $colores.forEach(($color) => {
    const r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    $color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
});
