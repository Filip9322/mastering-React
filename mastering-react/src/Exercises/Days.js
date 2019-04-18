import React, { Component } from 'react';

//"{weekDaysName.map(weekday => <DayWeek day={weekday.name} japanese={weekday.japanese}/>)}"



var taskPerDay   = ['feed the dogs','wash the dishes','rub the cat']
var taskPerDay2  = ['4h Mastering React','1h Lecture','1h Sport Exercise']

var weekDaysName = [
  {'name':"Monday",'japanese':"月曜日"},
  {'name':"Tuesday",'japanese':"火曜日"},
  {'name':"Wednesday",'japanese':"水曜日"},
  {'name':"Thursday",'japanese':"木曜日"},
  {'name':"Friday",'japanese':"金曜日"},
  {'name':"Saturday",'japanese':"土曜日"},
  {'name':"Sunday",'japanese':"日曜日"}
]

//stateless functional programming
const listTasks = (taskPerDay) =>
  React.createElement("ul",{className:"spf tasks"},
    taskPerDay.map((task,i) =>
      React.createElement("li",{key:i},task)
    )
  )

// Class by React Component
class Days extends Component{
  render()
  {
    return(
      <div className="weekdays">
        {weekDaysName.map((weekday,i) => {
          return(
          	<Day index={i} day = {weekday.name} japanese = {weekday.japanese} />
          )
        }
        )}
      </div>
    );
  }
}

class Day extends Component{
  constructor(props) {super(props)}
  renderListTask(task,i)
  {
    return React.createElement("li",{key:i},task)
  }
  render(){
    return(
        <div className="day" data-key={this.props.index}>
          <h1>{this.props.day}</h1>
          <p>{this.props.japanese}</p>
          {React.createElement("ul",{className:"tasks"},taskPerDay.map(this.renderListTask))}
          {listTasks(taskPerDay2)}
        </div>
    )
  }
}

export default Days;