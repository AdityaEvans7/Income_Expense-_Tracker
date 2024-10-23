import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CleanHands } from '@mui/icons-material';

const BASE_URL = 'http://localhost:5000/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    const [error, setError] = useState(null);

    //Add the Income in DB
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
            console.log(response.data);  //  response for debugg
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
        getIncome()
    };
     
    //Get the Income from DB
    const getIncome = async (income) => {
        const response = await axios.get(`${BASE_URL}get-incomes`, income);
        setIncome(response.data);
        console.log(response.data);
    }


    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }
    //console.log(totalIncome());

    //Expenses in DB
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, expense);
            console.log(response.data);  //  response for debugg
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
        getExpense()
    };
     
    const getExpense = async (expense) => {
        const response = await axios.get(`${BASE_URL}get-expense`, expense);
        setExpense(response.data);
        console.log(response.data);
    }


    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expense.forEach((expense) => {
            totalExpense = totalExpense + expense.amount
        })
        return totalExpense;
    }
    //console.log(totalExpense());

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expense]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3)
    }
    const AlltransactionHistory = () => {
        const history = [...incomes, ...expense]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,100)
    }
    


    return (
        <GlobalContext.Provider value={{
             addIncome,
             getIncome,
             incomes,
             deleteIncome,
             totalIncome,
             expense,
             addExpense,
             getExpense,
             deleteExpense,
             totalExpense,
             totalBalance, 
             transactionHistory,
             error,
             setError,
             AlltransactionHistory

              }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
