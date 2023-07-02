import styled from 'styled-components'
// import MuiButton from './components/Button/mui-button'
// import Button from './components/Button/button'
// import CustomiezedButton from './components/Button/button'
import CustomDropdown from './components/Dropdown/custom-dropdown'
import CustomInput from './components/Input/custom-input';
import CustomButton from './components/Button/button';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material';
// import { CustomTextField } from './components/Dropdown/custom-dropdown.styles'

function App() {

  const category = [
    'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'
  ]

  const handleChange = () => {

  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MainContainer>
            {/* <CustomiezedButton color={"primary"}/> */}
            {/* <CustomiezedButton color={"secondary"}/> */}
            <CustomButton
              backgroundColor={'#0058B9'}
              textColor={'#FFFFFF'}
              borderRadius={'20px'}
              padding={'10px 16px'}
              children={'Primary'}
              hover={'#0058B9'}
              opacity={'0.8'}
              width={'226px'}

            />
            <CustomButton
              backgroundColor={'#D9DBE9'}
              textColor={'#5A5A89'}
              borderRadius={'20px'}
              padding={'10px 16px'}
              children={'Secondary'}
              hover={'#D9DBE9'}
              opacity={'0.8'}
              width={'226px'}
            />

            <CustomDropdown children={category} label={'country'} id='category' handleChange={handleChange} />
            <br />
            <br />
            <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleChange} label={'Text'} />
          </MainContainer>
        </AppContainer>
      </ThemeProvider>

    </>
  )
}

const AppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw
`
const MainContainer = styled.main`
flex: 1;
background-color: #F3F3FF;
width: 100%;


`

export default App
