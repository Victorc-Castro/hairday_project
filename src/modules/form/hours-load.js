import dayjs from "dayjs"
import { openingsHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
  const opening = openingsHours.map((hour) => {
    // Recupera somente a hora.
    const [ scheduleHour ] = hour.split(":")

    // Adiciona a hora na data e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast,
    }
  })

  console.log(opening)
}