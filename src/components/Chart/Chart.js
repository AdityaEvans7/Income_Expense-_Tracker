import React from 'react'
import {Chart as ChartJs, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, ArcElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormate'

ChartJs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    ArcElement
)

function Chart () {
    const {incomes, expense} = useGlobalContext()



const data = {
    labels: incomes.map((inc) => {
        const {date} = inc
        return dateFormat(date)
    }),

    datasets: [
        {
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const {amount} = income
                    return amount
                })
            ],
            backgroundColor: 'green',
            tension: .3
        },
        {
            label: 'Expense',
            data: [
                ...expense.map((expense) => {
                    const {amount} = expense
                    return amount
                })
            ],
            backgroundColor: 'red',
            tension: .3

        }

    ]
}



  


  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  )
}


const ChartStyled = styled.div`

  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`
export default Chart
