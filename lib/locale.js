const months = ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const locale = {
    localize: {
        month: n => months[n],
        day: n => days[n]
    },
    formatLong: {}
}
export default locale