/*----Constructing elements with Data ----*/

var taskPerDay = ['feed the dogs','wash the dishes','rub the cat']
var ulR      = React.createElement("ul",null,
                taskPerDay.map((task,i) => React.createElement("li",{key:i},task))
               )

function DayWeek(props){
  return(
    <div className="day">
      <h3>{props.day}</h3>
      <p>{props.japanese}</p>
      {ulR}
    </div>
  );
}
var weekDaysName = [
  {'name':"Monday",'japanese':"月曜日"},
  {'name':"Tuesday",'japanese':"火曜日"},
  {'name':"Wednesday",'japanese':"水曜日"},
  {'name':"Thursday",'japanese':"木曜日"},
  {'name':"Friday",'japanese':"金曜日"},
  {'name':"Saturday",'japanese':"土曜日"},
  {'name':"Sunday",'japanese':"日曜日"}
]
var app = (
  <div>
    {weekDaysName.map(weekday => <DayWeek day={weekday.name} japanese={weekday.japanese}/>)}
  </div>
);

ReactDOM.render(app,document.querySelector('#app'));
