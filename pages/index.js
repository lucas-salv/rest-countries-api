import { useState, useRef } from 'react';
import Header from '@/components/containers/Header';
import Head from 'next/head';
import SearchBox from '@/components/containers/SearchBox';
import Card from '@/components/ui/Card';
import Box from '@/components/ui/Box';
import CardMedia from '@/components/ui/CardMedia';
import CardContent from '@/components/ui/CardContent';

const selectOptions = [
  "Africa",
  "América",
  "Asia",
  "Europa",
  "Oceania"
]

const Home = ({ setIsDarkMode, isDarkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const inputRef = useRef();

  const changeInputTextValue = (e) => {
    setInputValue(e.target.value);
  }

  const cleanInputTextValue = () => {
    setInputValue("");
    inputRef.current.focus();  
  }

  const changeSelectedOption = (e) => {
    setSelectedOption(e.target.innerHTML);
  }

  return (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    <main>
      <SearchBox 
        inputRef={inputRef}
        inputValue={inputValue}
        selectedOption={selectedOption}
        selectOptions={selectOptions}
        changeInputTextValue={changeInputTextValue}
        cleanInputTextValue={cleanInputTextValue}
        changeSelectedOption={changeSelectedOption}
      />
      <Box 
        style={{ margin: '20px', alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <Card>
          <CardMedia
            component="img"
            image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
            alt="brasil"
          />
          <CardContent>
            <h1 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>Brasil</h1>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>População:</span> 00000000</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Região:</span> América</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> Brasília-DF</p>
          </CardContent>
        </Card>

        <Card>
          <CardMedia
            component="img"
            image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
            alt="brasil"
          />
          <CardContent>
            <h1 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>Brasil</h1>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>População:</span> 00000000</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Região:</span> América</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> Brasília-DF</p>
          </CardContent>
        </Card>
        
      </Box>
    </main>
  </div>
)}

export default Home
