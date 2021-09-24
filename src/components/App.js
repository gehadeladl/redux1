import React , {Component} from 'react'
import { connect } from 'react-redux';
import {add_Reminder , remove_Reminder , clear_Reminder} from './../actions/index'
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component{
    state = {
        text : '' , 
        date : new Date()
    }

    render_Reminder = () => {
        const {reminders} = this.props ; 
        return(
            <ul className="list-group">
                {
                    reminders.map( reminder => {
                        return(
                            <li className="list-group-item" key={reminder.id}>
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div onClick={ () => this.props.remove_Reminder(reminder.id)} className='btn btn-primary'>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        return(
            <div className="app">
                <div className="container">
                    <h2>What Should U DO ?</h2>
                    <label>Text</label>
                    <input value={this.state.text} onChange={ (e) => this.setState({ text : e.target.value})} type='text' className="form-control" placeholder="Enter Text" />
                    <label>Date</label>
                    <DatePicker
                        selected={this.state.date}
                        onChange={(date) => {this.setState({ date : date})}}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeCaption="time"
                        className="form-control"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        value={this.state.date}
                        placeholder="Enter Date"
                    />
                    <button onClick={ () => {
                        this.props.add_Reminder(this.state.text , this.state.date) 
                        this.setState({ text : '' , date : ''})
                        }} className="btn btn-primary w-100">Add Reminder</button>
                    {this.render_Reminder()}
                    <button onClick={ () => this.props.clear_Reminder()} className="btn btn-danger w-100">Clear Reminder</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        reminders : state
    }
    
}
export default connect(mapStateToProps , {add_Reminder , remove_Reminder , clear_Reminder})(App);