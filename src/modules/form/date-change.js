import { schedulesDay } from "../schedules/load"

// Selecionar o inpout de data.
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay()