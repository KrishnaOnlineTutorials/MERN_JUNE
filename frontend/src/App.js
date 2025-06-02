import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const users = [
    { userName: 'userOne', age: 25, location: 'New York', contact: '123456' },
    { userName: 'userTwo', age: 30, location: 'Los Angeles', contact: '654321' },
    { userName: 'userThree', age: 28, location: 'Chicago', contact: '789012' },
    { userName: 'userFour', age: 35, location: 'Houston', contact: '345678' },
    { userName: 'userFive', age: 20, location: 'Phoenix', contact: '901234' },
    { userName: 'userSix', age: 20, location: 'Philadelphia', contact: '567890' },
    { userName: 'userSeven', age: 30, location: 'San Antonio', contact: '234567' },
    { userName: 'userEight', age: 22, location: 'San Diego', contact: '890123' },
    { userName: 'userNine', age: 27, location: 'Dallas', contact: '456789' },
    { userName: 'userTen', age: 33, location: 'San Jose', contact: '123789' }
  ];
  return (
    <div className="App">
      {users.map((user, index) => 
        <HelloWorld key={index} {...user} />
      )}
    </div>
  );
}

export default App;
