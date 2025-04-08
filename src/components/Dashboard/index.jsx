import React, { useReducer } from 'react'
import styled from 'styled-components'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import {
  Button,
  Container,
  CorridaCard,
  CorridasContainer,
  Header,
  Hipodromo,
  HipodromosContainer,
  Main,
  OptionButton,
  OptionsContainer,
  Sidebar,
  StatsBox,
  Subtitle,
} from './style'

const initialState = {
  user: 'Fulano',

  selectedHipodromo: null,
  selectedCorrida: null,
  viewStats: null,

  hipodromos: [
    {
      nome: 'Hipódromo da Gávea',
      local: 'Rio de Janeiro',
      status: 'AC',
      cor: '#d4f8c4',
      corridas: [
        {
          nome: 'Corrida 1',
          pista: 'Areia',
          cavalos: [
            {
              nome: 'Cavalo A',
              vitorias: 5,
              corridas: 10,
              tempoMedio: 72.3,
              peso: 480,
            },
            {
              nome: 'Cavalo B',
              vitorias: 2,
              corridas: 8,
              tempoMedio: 75.6,
              peso: 470,
            },
          ],
        },
        {
          nome: 'Corrida 2',
          pista: 'Grama',
          cavalos: [
            {
              nome: 'Cavalo X',
              vitorias: 3,
              corridas: 6,
              tempoMedio: 74.0,
              peso: 465,
            },
            {
              nome: 'Cavalo Y',
              vitorias: 1,
              corridas: 5,
              tempoMedio: 77.1,
              peso: 460,
            },
          ],
        },
      ],
    },
    {
      nome: 'Hipódromo de Cidade Jardim',
      local: 'São Paulo',
      status: 'A',
      cor: '#fefeb6',
      corridas: [
        {
          nome: 'Corrida 3',
          pista: 'Areia',
          cavalos: [
            {
              nome: 'Cavalo C',
              vitorias: 4,
              corridas: 9,
              tempoMedio: 73.5,
              peso: 478,
            },
            {
              nome: 'Cavalo D',
              vitorias: 2,
              corridas: 7,
              tempoMedio: 76.2,
              peso: 475,
            },
          ],
        },
        {
          nome: 'Corrida 4',
          pista: 'Grama',
          cavalos: [
            {
              nome: 'Cavalo E',
              vitorias: 5,
              corridas: 11,
              tempoMedio: 71.9,
              peso: 482,
            },
            {
              nome: 'Cavalo F',
              vitorias: 0,
              corridas: 4,
              tempoMedio: 78.4,
              peso: 460,
            },
          ],
        },
      ],
    },
    {
      nome: 'Hipódromo do Cristal',
      local: 'Porto Alegre',
      status: 'A',
      cor: '#c4f4ff',
      corridas: [
        {
          nome: 'Corrida 5',
          pista: 'Areia',
          cavalos: [
            {
              nome: 'Cavalo G',
              vitorias: 6,
              corridas: 12,
              tempoMedio: 70.2,
              peso: 490,
            },
            {
              nome: 'Cavalo H',
              vitorias: 3,
              corridas: 7,
              tempoMedio: 75.3,
              peso: 472,
            },
          ],
        },
        {
          nome: 'Corrida 6',
          pista: 'Grama',
          cavalos: [
            {
              nome: 'Cavalo I',
              vitorias: 1,
              corridas: 6,
              tempoMedio: 76.0,
              peso: 468,
            },
            {
              nome: 'Cavalo J',
              vitorias: 4,
              corridas: 9,
              tempoMedio: 73.8,
              peso: 474,
            },
          ],
        },
      ],
    },
    {
      nome: 'Hipódromo do Tarumã',
      local: 'Curitiba',
      status: 'AC',
      cor: '#ffd6d6',
      corridas: [
        {
          nome: 'Corrida 7',
          pista: 'Areia',
          cavalos: [
            {
              nome: 'Cavalo K',
              vitorias: 2,
              corridas: 5,
              tempoMedio: 77.9,
              peso: 458,
            },
            {
              nome: 'Cavalo L',
              vitorias: 3,
              corridas: 6,
              tempoMedio: 74.4,
              peso: 470,
            },
          ],
        },
        {
          nome: 'Corrida 8',
          pista: 'Grama',
          cavalos: [
            {
              nome: 'Cavalo M',
              vitorias: 5,
              corridas: 10,
              tempoMedio: 72.0,
              peso: 485,
            },
            {
              nome: 'Cavalo N',
              vitorias: 1,
              corridas: 4,
              tempoMedio: 79.1,
              peso: 462,
            },
          ],
        },
      ],
    },
  ],
}


const reducer = (state, action) => {
  if (action.type === 'SET_USER') return { ...state, user: action.payload }
  if (action.type === 'SELECT_HIPODROMO')
    return {
      ...state,
      selectedHipodromo: action.payload,
      selectedCorrida: null,
      viewStats: null,
    }
  if (action.type === 'SELECT_CORRIDA')
    return { ...state, selectedCorrida: action.payload, viewStats: null }
  if (action.type === 'VIEW_STATS') return { ...state, viewStats: action.payload }
  return state
}

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSelectHipodromo = (hip) => {
    dispatch({ type: 'SELECT_HIPODROMO', payload: hip })
  }

  const handleSelectCorrida = (corrida) => {
    dispatch({ type: 'SELECT_CORRIDA', payload: corrida })
  }

  const handleViewStats = (tipo) => {
    dispatch({ type: 'VIEW_STATS', payload: tipo })
  }

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
            <Hipodromo
              key={index}
              color={hip.cor}
              onClick={() => handleSelectHipodromo(hip)}
            >
              <p>
                <strong>{hip.nome}</strong>
              </p>
              <p>{hip.local}</p>
            </Hipodromo>
          ))}
        </HipodromosContainer>

        {state.selectedHipodromo && (
          <>
            <h3>Corridas - {state.selectedHipodromo.nome}</h3>
            <CorridasContainer>
              {state.selectedHipodromo.corridas.map((corrida, idx) => (
                <CorridaCard key={idx} onClick={() => handleSelectCorrida(corrida)}>
                  {corrida.nome}
                </CorridaCard>
              ))}
            </CorridasContainer>
          </>
        )}

        {state.selectedCorrida && (
          <>
            <h4>Corrida: {state.selectedCorrida.nome}</h4>
            <OptionsContainer>
              <OptionButton onClick={() => handleViewStats('pista')}>
                Ver Pista
              </OptionButton>
              <OptionButton onClick={() => handleViewStats('cavalos')}>
                Ver Cavalos
              </OptionButton>
            </OptionsContainer>
          </>
        )}

        {state.viewStats === 'pista' && (
          <StatsBox>
            <strong>Pista:</strong> {state.selectedCorrida.pista}
          </StatsBox>
        )}

        {state.viewStats === 'cavalos' && (
          <StatsBox>
            <strong>Cavalos:</strong>
            <ul>
              {state.selectedCorrida.cavalos.map((cavalo, idx) => (
                <li key={idx}>
                  <p><strong>Nome:</strong> {cavalo.nome}</p>
                  <p><strong>Vitórias:</strong> {cavalo.vitorias}</p>
                  <p><strong>Corridas:</strong> {cavalo.corridas}</p>
                  <p><strong>Tempo Médio:</strong> {cavalo.tempoMedio}s</p>
                  <p><strong>Peso:</strong> {cavalo.peso}kg</p>
                  <hr />
                </li>
              ))}
            </ul>
          </StatsBox>
        )}
      </Main>
    </Container>
  )
}

export { Dashboard }
