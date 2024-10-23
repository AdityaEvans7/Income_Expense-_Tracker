import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import Chart from '../Chart/Chart';
import { rupee } from '../../utils/Icon';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

function Dashboard() {
  const {totalExpense,incomes, expense, totalIncome, totalBalance, getIncome, getExpense}= useGlobalContext()

  useEffect(() => {
    getIncome()
    getExpense()
  },[])
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>My Dashboard</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Toatal Income</h2>
                <p>
                  {rupee}{totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Toatal Expense</h2>
                <p>
                  {rupee}{totalExpense()}
                </p>
              </div>
              <div className="balance">
              <h2>Toatal Balance</h2>
              <p>
                  {rupee}{totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className='salary-title'>Min <span>Income</span>Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...incomes.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...incomes.map(item => item.amount))}
              </p>
            </div>
            <h2 className='salary-title'>Min <span>Expense</span>Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...expense.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...expense.map(item => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                justify-content: center;
                align-items: center;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 0.5rem;
                    p{
                        font-size: 1.2rem;
                        font-weight: 500;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 1.2rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1rem;
                span{
                    font-size: 1.2rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 400;
                    font-size: 1.2rem;
                }
            }
        }
    }
`;




export default Dashboard
