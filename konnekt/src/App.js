import './App.css';
import data from './data.json';
import Jobs from './components/Jobs'
import Header from './components/Header'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  // console.log(data)
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <Header/>
    </div>
    
  );
    
}

export default App;
