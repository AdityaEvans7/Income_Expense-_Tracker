import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icon';

function ExpenseForm() {
    const { addExpense, getExpense, error, setError } = useGlobalContext();

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })

        const formData = {
            ...inputState,
            amount: Number(inputState.amount),  // Ensure amount is a number
            date: inputState.date ? inputState.date.toISOString() : '',  // Convert date to ISO string
        };

        addExpense(formData);  // Submit the form data
        getExpense()
    };

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>
            }
            <div className="input-control">
                <input
                    type="text"
                    name="title"
                    placeholder="Expense Title"
                    value={title}
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    type="text"
                    name="amount"
                    placeholder="Expense Amount"
                    value={amount}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setInputState({ ...inputState, date })}
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    value={description}
                    placeholder="Add A Reference"
                    id="description"
                    cols="30"
                    rows="2"
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent)'}
                    color={'#fff'}
                />
            </div>
        </ExpenseFormStyled>
    );
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    
    .input-control {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        input, select, textarea {
            width: 100%;
            padding: 0.75rem;
            border-radius: 8px;
            border: 1px solid #ddd;
            font-size: 1rem;
            outline: none;
            background-color: #fff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
            color: rgba(34, 34, 96, 0.9);
            &::placeholder {
                color: rgba(34, 34, 96, 0.6);
            }
        }
        
        input:focus, select:focus, textarea:focus {
            border-color: var(--color-accent);
        }
    }

    .selects {
        select {
            appearance: none;
            background: transparent;
            border: 1px solid #ddd;
            padding: 0.75rem;
            border-radius: 8px;
        }
    }

    .submit-btn {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        
        button {
            background-color: var(--color-accent);
            border: none;
            color: white;
            font-size: 1rem;
            padding: 0.8rem 2rem;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            
            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;

export default ExpenseForm;
