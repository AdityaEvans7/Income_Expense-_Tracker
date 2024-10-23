import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';


function Income() {
  const {addIncome, incomes, getIncome, deleteIncome, totalIncome} = useGlobalContext()

  useEffect(()=> {
    getIncome()
  },[])

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2><div className="total-income">Total Income: <span>₹ {totalIncome()}</span></div></h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income)=> {
              const {_id, title, amount, date, category, description} = income;
              return <IncomeItem 
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                category={category}
                IndicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        
        background: #f5e3ed;
        border: 2px rounded #FFFFFFF;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-radius: 20px;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
         span{
             font-size: 2rem;
             font-weight: 700;
             color: var(--color-green);

        }

    }
       
    .income-content{
        display: flex;
        gap: 2rem;
        .form-container{
            width: 40%; /* Make the form section smaller */
        }
        .incomes{
            width: 60%; /* Adjust the income items to take less width */
        }
    }
    h1 {
        margin-bottom: 2rem;
    }
`;

export default Income;
