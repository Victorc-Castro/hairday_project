export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available')


  hours.forEach(( available ) =>{
    available.addEventListener("click", (selected) =>{

      // Removendo a classe "hour-selected" de todas as "li's" não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Adiciona a classe na "li" selecionada.
      selected.target.classList.add("hour-selected")
    })
  })
}