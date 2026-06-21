let loaded = false
let BarComp: any
let DoughnutComp: any

export async function useCharts() {
  if (loaded) return { Bar: BarComp, Doughnut: DoughnutComp }

  const [chartJs, vueChartjs] = await Promise.all([
    import('chart.js'),
    import('vue-chartjs'),
  ])

  const {
    Chart, CategoryScale, LinearScale, BarElement,
    ArcElement, Title, Tooltip, Legend,
  } = chartJs

  Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

  BarComp = vueChartjs.Bar
  DoughnutComp = vueChartjs.Doughnut
  loaded = true

  return { Bar: BarComp, Doughnut: DoughnutComp }
}
