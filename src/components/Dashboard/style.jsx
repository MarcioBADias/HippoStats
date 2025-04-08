import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const Sidebar = styled.div`
  width: 200px;
  background: #008cfa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Main = styled.div`
  flex: 1;
  padding: 20px;
`

export const Header = styled.header`
  margin-bottom: 20px;
`

export const Subtitle = styled.p`
  color: gray;
`

export const HipodromosContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Hipodromo = styled.div`
  background: ${(props) => props.color};
  padding: 15px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
`

export const CorridasContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`

export const CorridaCard = styled.div`
padding: 10px;
background-color: #efefef;
margin: 5px;
border-radius: 8px;
cursor: pointer;
transition: 0.3s;
&:hover {
  background-color: #ddd;
}
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`

export const OptionButton = styled.button`
  background: #008cfa;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
`

export const StatsBox = styled.div`
  background: #f0f0f0;
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
`
