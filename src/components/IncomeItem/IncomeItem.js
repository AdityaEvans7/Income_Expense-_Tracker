import React from 'react'
import styled from 'styled-components'
import { comment, rupee, calendar, trash, money, freelance, stocks, users, bitcoin, card, yt, piggy, book, food, medical, tv, takeaway, clothing, circle } from '../../utils/Icon'
import Button from '../Button/Button'

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    IndicatorColor,
    type
}) {

  const categoryIcon = () => {
    switch(category) {
      case 'Salary':
        return money;
      case 'Freelancing':
        return freelance;
      case 'Investments':
        return stocks;
      case 'Stocks':
        return users;
      case 'Bitcoin':
        return bitcoin;
      case 'Bank':
        return card;
      case 'YouTube':
        return yt;
      case 'Other':
        return piggy;
      default:
        return '';
        
    }

  }

  const expenseCatIcon = () => {
    switch (category) {
        case 'education':
            return book;
        case 'groceries':
            return food;
        case 'health':
            return medical;
        case 'subscriptions':
            return tv;
        case 'takeaways':
            return takeaway;
        case 'clothing':
            return clothing;
        case 'travelling':
            return freelance;
        case 'other':
            return circle;
        default:
            return ''
    }
}
 console.log('type', type)



  return (
    <IncomeItemStyled indicator={IndicatorColor}>
        <div className="icon">
            {type === 'expense' ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{rupee} {amount}</p>
                    <p>{calendar} {new Date(date).toLocaleDateString()}</p>
                    <p>{comment} {description}</p>
                </div>
                <div className="btn-con">
                    <Button
                        icon={trash}
                        bpad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color)'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        onClick={() => deleteItem(id)}
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    color: #222260;
    .icon{
        width: 40px; /* Reduce the size of the icon */
        height: 40px;
        border-radius: 10px;
        background: #F5F5F5;
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
    }
    .content{
        flex: 1;
        display: flex;
        padding: 0.2rem;
        flex-direction: column;
        gap: 0.5rem;
        h5{
            font-size: 1.2rem;
            margin-left: 10px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: -10px;
                top: 50%;
                transform: translateY(-50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                gap: 2rem;
                p{
                    display: flex;
                    
                    align-items: center;
                    color: var(--primary-color);
                    opacity: 0.8;
                    font-size: 0.9rem; /* Adjust font-size to make it more compact */
                }
            }
            .btn-con {
                display: flex;
                justify-content: flex-end;
                width: 60px;
            }
        }
    }
`;

export default IncomeItem;
