import React, { Component } from 'react'

export default class InputFullSalary extends Component {

    handleInputChange = (event) => {
        const newSalary = event.target.value;
        this.props.onChangeValue(newSalary);
    }

    render() {

        const { baseSalary } = this.props;

        return (
            <div>
                <span>Salário Bruto: </span>
                <input
                    type="number"
                    placeholder="Salário"
                    min="1000"
                    step="100"
                    value={baseSalary}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}
