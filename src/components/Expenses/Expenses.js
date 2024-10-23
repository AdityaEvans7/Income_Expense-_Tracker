import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';


function Expense() {
  const {addIncome, expense, getExpense, deleteExpense, totalExpense} = useGlobalContext()

  useEffect(()=> {
    getExpense()
  },[])

  return (
    <Expensetyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2><div className="total-expense">Total Expense: <span>₹ {totalExpense()}</span></div></h2>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm  />
          </div>
          <div className="expense">
            {expense.map((expense)=> {
              const {_id, title, amount, date, category, description, type} = expense;
              return <IncomeItem 
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                IndicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </Expensetyled>
  )
}

const Expensetyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
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
       
    .expense-content{
        display: flex;
        gap: 2rem;
        .form-container{
            width: 40%; 
        }
        .expense{
            width: 60%; 
        }
    }
    h1 {
        margin-bottom: 2rem;
    }
`;

export default Expense;
