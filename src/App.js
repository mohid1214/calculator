import React, { useState } from 'react';

function App() {

  const [numberA, setNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [answer, setAnswer] = useState("0")
  const [operation, setOperation] = useState("");


  const handleButtonClick = (value) => {

    if (["+", "-", "*", "/", "="].includes(value)) {
      if (value == "=") {
        calculateResult()
      } else {
        setOperation(value);
        setNumberB("");
      }
    } else {
      if (operation == "") {
        setNumberA((prev) => {
          const newNumber = prev + value;
          setAnswer(newNumber);
          return newNumber;
        })

      } else {
        setNumberB((prev) => {
          const newNumber = prev + value;
          setAnswer(newNumber);
          return newNumber;
        });
      }
    }
  }

  const calculateResult = () => {
    const numA = parseFloat(numberA);
    const numB = parseFloat(numberB);

    switch (operation) {
      case '+':
        setAnswer(() => {
          const newNumber = numA + numB;
          setNumberA(newNumber.toString());
          setNumberB("");
          return newNumber;
        });

        break;

      case '-':
        setAnswer(() => {
          const newNumber = numA - numB;
          setNumberA(newNumber.toString());
          setNumberB("");
          return newNumber;
        });
        break;

      case '*':
        setAnswer(() => {
          const newNumber = numA * numB;
          setNumberA(newNumber.toString());
          setNumberB("");
          return newNumber;
        });
        break;

      case '/':
        setAnswer(() => {
          const newNumber = numA / numB;
          setNumberA(newNumber.toString());
          setNumberB("");
          return newNumber;
        });
        break;

      default: setAnswer("error");
        setNumberA("");
        setNumberB("");

    }
  }

  const resetCalculator = () => {
    setAnswer("0");
    setNumberA("");
    setNumberB("");
    setOperation("");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <div style={{ borderColor: "black", height: '500px', width: '25%', borderWidth: "5px", borderStyle: 'solid', borderRadius: '15px' }}>

        <div style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '5px', height: '100px', marginLeft: '5px', marginRight: '5px', marginTop: '10px', fontSize: "60px", fontWeight: 'bold',backgroundColor:"lightgrey" }}>
          {answer}
        </div>




        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', gap: '25px', alignItems: 'center' }}>


          <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <button onClick={() => resetCalculator()} style={{ width: '65px', height: '65px', fontSize: '35px' }}>
              AC
            </button>
            <button onClick={() => handleButtonClick('0')} style={{ width: '65px', height: '65px', fontSize: '35px' }}>
              0
            </button>
            <button onClick={() => handleButtonClick('/')} style={{ width: '65px', height: '65px', fontSize: '35px' }}>
              /
            </button>
            <button onClick={() => handleButtonClick('*')} style={{ width: '65px', height: '65px', fontSize: '35px' }}>
              X
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <button onClick={() => handleButtonClick('1')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 1 </button>
            <button onClick={() => handleButtonClick('2')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 2 </button>
            <button onClick={() => handleButtonClick('3')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 3 </button>
            <button onClick={() => handleButtonClick('+')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> + </button>

          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <button onClick={() => handleButtonClick('4')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 4 </button>
            <button onClick={() => handleButtonClick('5')} style={{ width: '65px', height: '65px', fontSize: '35px' }}>5 </button>
            <button onClick={() => handleButtonClick('6')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 6</button>
            <button onClick={() => handleButtonClick('-')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> -</button>

          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <button onClick={() => handleButtonClick('7')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 7 </button>
            <button onClick={() => handleButtonClick('8')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 8 </button>
            <button onClick={() => handleButtonClick('9')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> 9 </button>
            <button onClick={() => handleButtonClick('=')} style={{ width: '65px', height: '65px', fontSize: '35px' }}> = </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
