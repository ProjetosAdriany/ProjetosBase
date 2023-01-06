import React, { Component } from 'react';
import InputFullSalary from './components/inputFullSalary/InputFullSalary';
import InputReadOnly from './components/inputReadOnly/InputReadOnly';
import {calculateSalaryFrom} from './helpers/salary';
import ProgressBarSalary from './components/progressBarSalary/ProgressBarSalary';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      baseSalary: 1000
    }
  };

  handleChangeSalary = (newSalary) => {
    this.setState({
      baseSalary: newSalary,
    });
  }

  

  render() {
    const { baseSalary } = this.state;
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(baseSalary);
    
    const INSSPercentage = (discountINSS / baseSalary) * 100;
    const IRPFPercentage = (discountIRPF / baseSalary) * 100;
    const netSalaryPercentage = (netSalary /  baseSalary)  * 100;
    
    return (
      <div className='container'>
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <InputFullSalary baseSalary={baseSalary} onChangeValue={this.handleChangeSalary}/>
        <InputReadOnly 
          baseINSS={baseINSS} 
          discountINSS={discountINSS} 
          INSSPercentage = {INSSPercentage}
          baseIRPF={baseIRPF} 
          discountIRPF={discountIRPF} 
          IRPFPercentage = {IRPFPercentage}
          netSalary={netSalary}
          netSalaryPercentage = {netSalaryPercentage} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ProgressBarSalary value={INSSPercentage} color='#e67e22'/>
            <ProgressBarSalary value={IRPFPercentage} color='#c0392b'/>
            <ProgressBarSalary value={netSalaryPercentage} color='#16a085'/>
        </div>
      </div>
    )
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center'
  }
}