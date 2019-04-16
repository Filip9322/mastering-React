import React, { Component } from 'react';

//"{weekDaysName.map(weekday => <DayWeek day={weekday.name} japanese={weekday.japanese}/>)}"



var taskPerDay   = ['feed the dogs','wash the dishes','rub the cat']
var weekDaysName = [
  {'name':"Monday",'japanese':"月曜日"},
  {'name':"Tuesday",'japanese':"火曜日"},
  {'name':"Wednesday",'japanese':"水曜日"},
  {'name':"Thursday",'japanese':"木曜日"},
  {'name':"Friday",'japanese':"金曜日"},
  {'name':"Saturday",'japanese':"土曜日"},
  {'name':"Sunday",'japanese':"日曜日"}
]


/*var ulReactClass = React.createClass
({
  displayName:"DayTasks",
  render() {
    return React.createElement("ul",{"className":"ingredients"},
            this.props.tasksPerDay.map((task,i)=>
              React.createElement("li",null,"task")
            )
          );
  }
});*/
class Days extends Component{
  render(){
    return(
      <div>
        {weekDaysName.map(weekday => {
          return(
          	<Day day = {weekday.name} japanese = {weekday.japanese} />
          )
        }
        )}
      </div>
    );
  }
}

class Day extends Component{
  constructor(props) {super(props)}
  render(){
    return(
        <div className="day">
          <h1>{this.props.day}</h1>
          <p>{this.props.japanese}</p>
        </div>
    )
  }
}

export default Days;