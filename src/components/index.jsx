import React, { useReducer } from 'react'
import styled from 'styled-components'
import { FiLogOut, FiSettings } from 'react-icons/fi'

const initialState = {
  user: 'Fulano',
  hipodromos: [
    {
      nome: 'Hipódromo da Gávea',
      local: 'Rio de Janeiro',
      status: 'AC',
      cor: '#d4f8c4',
    },
    {
      nome: 'Hipódromo de Cidade Jardim',
      local: 'São Paulo',
      status: 'A',
      cor: '#fefeb6',
    },
    {
      nome: 'Hipódromo do Cristal',
      local: 'Porto Alegre',
      status: 'A',
      cor: '#c4f4ff',
    },
    {
      nome: 'Hipódromo do Tarumã',
      local: 'Curitiba',
      status: 'AC',
      cor: '#ffd6d6',
    },
  ],
}

const reducer = (state, action) => {
  if (action.type === 'SET_USER') return { ...state, user: action.payload }
  if (action.type === 'UPDATE_HIPODROMO') {
    return {
      ...state,
      hipodromos: state.hipodromos.map((hip) =>
        hip.nome === action.payload.nome
          ? { ...hip, ...action.payload.data }
          : hip,
      ),
    }
  }
  return state
}

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container>
      <Sidebar>
        <Button>Dashboard</Button>
        <Button>
          <FiSettings /> Settings
        </Button>
        <Button>
          <FiLogOut /> Logout
        </Button>
      </Sidebar>
      <Main>
        <Header>
          <h1>Welcome back, {state.user}</h1>
          <Subtitle>
            Os melhores dados de corridas e cavalos em suas performaces
          </Subtitle>
        </Header>
        <HipodromosContainer>
          {state.hipodromos.map((hip, index) => (
            <Hipodromo key={index} color={hip.cor}>
              <p>
                <strong>{hip.nome}</strong>
              </p>
              <p>{hip.local}</p>
            </Hipodromo>
          ))}
        </HipodromosContainer>
      </Main>
    </Container>
  )
}

export { Dashboard }

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: 200px;
  background: #008cfa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Main = styled.div`
  flex: 1;
  padding: 20px;
`

const Header = styled.header`
  margin-bottom: 20px;
`

const Subtitle = styled.p`
  color: gray;
`

const HipodromosContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Hipodromo = styled.div`
  background: ${(props) => props.color};
  padding: 15px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
`
