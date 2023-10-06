import React from "react";
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./Components/DietCard.css";
import './DietCalc.css'
import './DietCard.css'
import './Fonts.css'
// import Accordion from 'react-bootstrap/Accordion';

const DietCalc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const handleChange1 = (event) => {
        setWeight(event.target.value);
    };

    const handleChange2 = (event) => {
        setHeight(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    var bmi = 0
    var h = height / 100
    bmi = weight / (h * h)

    const BmiText = () => {
            if (bmi < 18.5 && bmi > 0) {
                return(<p className="input__description" style={{color: "#fff"}}>You are Underweight</p>)
            } 
            else if (bmi >= 18.5 && bmi < 25){
                return(<p className="input__description" style={{color: "#2ff764"}}>You are Normal</p>)
            }
            else if (bmi >= 25 && bmi < 30){
                return(<p className="input__description" style={{color: "#fff"}}>You are Overweight</p>)
            }
            else if (bmi >= 30){
                return(<p className="input__description" style={{color: "#fff"}}>You are Obese</p>)
            }
        }

    const DietPlan = () => {
            if (height === 0 || weight === 0) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Enter your weight and height to get your diet plan!
                    </p>)
            }

            else if (height === null || weight === null) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Invalid weight and height!
                </p>)
            }

            else if (height < 0 || weight < 0) {
                return(<p className="dietPlan__description" style={{color: "#fff", textAlign:"center"}}>
                    Invalid weight and height!
                </p>)
            }

            else if (bmi < 18.5 && bmi > 0) {
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    If you are underweight, you may need to make some changes to your diet to gain weight. Here are some tips:
                    <br/><br/>
                    <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <h4 className="Mont800">Vegetarian</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                            <ul style={{paddingLeft:"10px"}}>
                                <li><h2>Breakfast</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Oatmeal with berries and nuts</li>
                                            <li>Yogurt with fruit and granola</li>
                                            <li>Smoothie made with fruits, yogurt, vegetables and protein powder</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Lunch</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Chickpea salad sandwich on whole-wheat bread</li>
                                            <li>Lentil soup with whole-wheat bread</li>
                                            <li>Tofu stir-fry with brown ricer</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Dinner</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Vegetarian chili</li>
                                            <li>Pasta with tomato sauce and vegetables</li>
                                            <li>Lentil soup</li>
                                            <li>Black bean burgers with sweet potato fries</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Snacks</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                        <li>Trail mix (nuts, seeds, and dried fruit)</li>
                                        <li>Fruits and vegetables</li>
                                        <li>Hard-boiled eggs</li>
                                        <li>Protein shakes</li>
                                        <li>Avocado toast</li>
                                        </i>
                                    </ul>
                                </li>
                            </ul>
                    </AccordionDetails>
                     </Accordion>   
                        <br/>
                    <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <h4 className="Mont800">Non-Vegetarian</h4>
                    </AccordionSummary>
                    <AccordionDetails >
                    <ul style={{paddingLeft:"10px"}}>
                                <li><h2>Breakfast</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Oatmeal with berries and nuts</li>
                                            <li>Yogurt with fruit and granola</li>
                                            <li>Whole-wheat toast with avocado and eggs</li>
                                            <li>Smoothie made with fruits, yogurt, and protein powder</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Lunch</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Salad with grilled chicken or fish</li>
                                            <li>Soup and sandwich</li>
                                            <li>Leftovers from dinner</li>
                                            <li>Chicken tikka / Paneer sandwich on whole-wheat bread with avocado</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Dinner</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                            <li>Grilled salmon with roasted vegetables</li>
                                            <li>Chicken stir-fry with brown rice</li>
                                            <li>Lentil soup</li>
                                            <li>Pasta with lean protein and vegetables</li>
                                        </i>
                                    </ul>
                                </li>
                                <li><h2>Snacks</h2>
                                    <ul style={{fontWeight:"lighter"}}>
                                        <i>
                                        <li>Fruits and vegetables</li>
                                        <li>Nuts and seeds</li>
                                        <li>Hard-boiled eggs</li>
                                        <li>Protein shakes</li>
                                        <li>Trail mix</li>
                                        </i>
                                    </ul>
                                </li>
                            </ul>
                            <br/>
                            It is important to eat calorie-dense foods, which means foods that are high in calories and nutrients. This will help you to gain weight. Some examples of calorie-dense foods include:
                            <ul style={{fontWeight:"lighter", paddingLeft:"10px"}}>
                                <i>
                                <li>Avocados</li>
                                <li>Nuts and seeds</li>
                                <li>Olive oil</li>
                                <li>Dairy products</li>
                                <li>Eggs</li>
                                <li>Fatty fish</li>
                                <li>Whole grains, such as oats, quinoa, and brown rice</li>
                                <li>Lean protein sources, such as chicken, fish, and beans</li>
                                </i>
                            </ul>
                    </AccordionDetails>
                    </Accordion>
                    <br/>
                    You should also aim to eat three meals and two to three snacks per day. This will help you to consume more calories throughout the day.
                    <br/>
                    If you are struggling to gain weight, you may want to consider talking to your doctor or a registered dietitian. They can help you to create a personalized diet plan that meets your individual needs.
                </p>)
            } 
            else if (bmi >= 18.5 && bmi < 25){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    This is a healthy BMI, so no major changes to your diet are necessary. However, it is still important to eat a balanced diet that includes plenty of fruits, vegetables, whole grains, and lean protein.
                    </p>)
            }
            else if (bmi >= 25 && bmi < 30){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>                   
                            If you are overweight, you may need to make some changes to your diet to lose weight. Here are some tips:
                            <ul>
                                <li>Choose fiber-rich foods, such as fruits, vegetables, and whole grains.</li>
                                <li>Choose lean sources of protein, such as fish and beans.</li>
                                <li>Limit processed foods, sugary drinks, and unhealthy fats.</li>
                                <li>Eat plenty of fruits and vegetables.</li>
                                <li>Limit alcohol.</li>
                                <li>Exercise regularly.</li>
                            </ul>
                    </p>)
            }
            else if (bmi >= 30){
                return(<p className="dietPlan__description" style={{color: "#fff"}}>
                    If you are obese, you may need to make some significant changes to your diet to lose weight and improve your health. Here are some tips:
            {/* <ul>
                <li>Eat a healthy diet that is low in calories and high in nutrients.</li>
                <li>Avoid processed foods, sugary drinks, and unhealthy fats.</li>
                <li>Eat plenty of fruits and vegetables.</li>
                <li>Limit alcohol.</li>
                <li>Exercise regularly.</li>
            </ul>
            <br></br>
            <Accordion data-bs-theme="dark">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Vegetarian</Accordion.Header>
                <Accordion.Body>
                <ul>
                        <li>Breakfast
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Oatmeal with berries and nuts</li>
                                    <li>Yogurt with fruit and granola</li>
                                    <li>Smoothie made with fruits, yogurt, vegetables and protein powder</li>
                                </i>
                            </ul>
                        </li>
                        <li>Lunch
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Salad with grilled tofu or tempeh</li>
                                    <li>Lentil soup with whole-wheat bread</li>
                                    <li>Tofu stir-fry with brown rice</li>
                                </i>
                            </ul>
                        </li>
                        <li>Dinner
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Vegetarian chili</li>
                                    <li>Pasta with tomato sauce and vegetables</li>
                                    <li>Black bean burgers with sweet potato fries</li>
                                </i>
                            </ul>
                        </li>
                        <li>Snacks
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                <li>Trail mix (nuts, seeds, and dried fruit)</li>
                                <li>Protein shakes</li>
                                <li>Avocado toast</li>
                                </i>
                            </ul>
                        </li>
                    </ul>



                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Non-Vegetarian</Accordion.Header>
                <Accordion.Body>
                <ul>
                        <li>Breakfast
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Oatmeal with berries and nuts</li>
                                    <li>Yogurt with fruit and granola</li>
                                    <li>Whole-wheat toast with avocado and eggs</li>
                                </i>
                            </ul>
                        </li>
                        <li>Lunch
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Salad with grilled chicken or fish</li>
                                    <li>Soup and sandwich</li>
                                    <li>Leftovers from dinner</li>
                                </i>
                            </ul>
                        </li>
                        <li>Dinner
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Grilled salmon with roasted vegetables</li>
                                    <li>Chicken stir-fry with brown rice</li>
                                    <li>Lentil soup</li>
                                </i>
                            </ul>
                        </li>
                        <li>Snacks
                            <ul style={{fontWeight:"lighter"}}>
                                <i>
                                    <li>Fruits and vegetables</li>
                                    <li>Nuts and seeds</li>
                                    <li>Hard-boiled eggs</li>
                                </i>
                            </ul>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion> */}
            <br/>
        </p>)
            }
        }
    
    return (<>
    <div className="col alignBox">
        {/* BMI Calculator */}
        <form className="card" onSubmit={handleSubmit}>
            <h1 className='Mont800 al_txt' style={{color:"#2ff764"}} >BMI Calculator</h1>
            <label class="input__label">Weight (in kgs)</label>
            <input className="input" placeholder="Enter your weight" type="number" value={weight} onChange={handleChange1}/>
            <br/>
            <label class="input__label">Height (in cms)</label>
            <input className="input" placeholder="Enter your height" type="number" value={height} onChange={handleChange2}/>
            <p className="input__description">BMI: {bmi.toFixed(2)}</p>
            <BmiText/>
        </form>
        <br></br>
        <br></br>

        {/* Diet Plan */}
        <div className="card2 ">
            <h1 className="Mont800 al_txt"  style={{color:"#2ff764", flexDirection:"row"}}>Diet Plan</h1>
            <div style={{ flexGrow: 0 }}>
                <DietPlan/>
            </div>
        </div>


    </div>
    </>);
  }
  
  export default DietCalc;