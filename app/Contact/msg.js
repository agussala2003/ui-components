export default function GenerationLink () {
    let option = document.querySelector('#dropService').value
    window.open(`https://api.whatsapp.com/send?phone=+541123465194&text=Hola!%20estoy%20interesado%20en%20el%20servicio%20de%20${option}`, '_blank')
    return 0
}