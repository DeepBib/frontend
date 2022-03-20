import React from "react";

class CheckBoxAPI extends React.Component {
    // On initialise l'état à false
    state = {
        isSelected: false,
    }
    // On déclare la fonction qui va se charger de changer l'état de la box
    toggleCheckBoxChange(){
        // On initialise la fonction qui check l'état et le label de la checkboc
        const{handleCheckBoxChange,label} = this.props;

        this.setState(({isChecked})=>({
            isChecked: !isChecked,
        }));
        handleCheckBoxChange(label);
    }

    render(){
        const {label} = this.props;
        const {isChecked} = this.state;

        return(
            <div className="form-check form-check-inline">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value={label} checked={isChecked} onChange={this.toggleCheckBoxChange}/>
                    {label}
                </label>
            </div>   
        )
    }
}


export default CheckBoxAPI;
