import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          diet: {
            isVegan: false,
            isVegetarian: false,
            isHalal: false
          },
          dest: null
          
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target;
      type === "checkbox" ? 
      this.setState( prevState => {
        return {
          diet: {
            ...prevState.diet,
            [name]: checked
          }
        }
      }) :
      this.setState({
        [name]: value,
      })
    }
    
    render() {
      // const dietaryRestrictions = this.state.diet.filter(restriction => restriction);

        return (
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName}  onChange={this.handleChange} placeholder="First Name" /><br />
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.handleChange}  placeholder="Age" /><br />
                    
                    <label>
                      <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                      /> Female
                    </label>
                    <label>
                      <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                      /> Male
                    </label>
                    <br />
                    <br />
                    
                    <select 
                      value={this.state.dest}
                      name="dest"
                      onChange={this.handleChange}
                    >
                      <option value="">-- Please choose a destination --</option>
                      <option value="Korea">Korea</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Japan">Japan</option>

                    </select>
                    <br />
                    <br />
                    
                    <label>
                      <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.diet.isVegan}
                      /> Vegan
                    </label>
                    <br />
                    <label>
                      <input 
                        type="checkbox"
                        name="isVegetarian"
                        onChange={this.handleChange}
                        checked={this.state.diet.isVegetarian}
                      /> Vegetarian
                    </label>
                    <br />
                    <label>
                      <input 
                        type="checkbox"
                        name="isHalal"
                        onChange={this.handleChange}
                        checked={this.state.diet.isHalal}
                      /> Halal
                    </label>
                    <br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.dest}</p>
                <p>
                    Your dietary restrictions: 
                    <p>Vegan: {this.state.diet.isVegan ? "Yes" : "No"}</p>
                    <p>Vegetarian: {this.state.diet.isVegetarian ? "Yes" : "No"}</p>
                    <p>Halal: {this.state.diet.isHalal ? "Yes" : "No"}</p>
                </p>
            </main>
        )
    }
}

export default App
