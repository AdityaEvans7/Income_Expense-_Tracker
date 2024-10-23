import React, {useMemo, useState} from 'react'
import styled from "styled-components";
import bgex from './img/whitebg.png';
import { MainLayout } from './styles/Layout';
import Adi from "./components/Adi/Adi";
import Navigation from "./components/Navigation/Navigation";
import  Dashboard  from './components/Dashboard/Dashboard';
import Income from './components/Incomes/Income';
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { Cottage } from '@mui/icons-material';
import Transaction from './components/Transaction/Transaction';

function App() {
  const [active, setActive] = useState(1);

  const global  = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4:
        return<Expenses />
      default:
        return <Dashboard />
    }
  }

  const AdiMemo = useMemo(() => {
    return <Adi />
  },[])
  
  
  return (
    <AppStyled bg={bgex} className="App">
      {AdiMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow:auto;
    overflow-x: hidden;
    &::webkit-scrollbar{
     width: 0;
    }
  }
`;

export default App;
