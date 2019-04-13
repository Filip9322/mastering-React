//--Use of Pure React inside of React with JSX ----
/*
Some additional styles:

.day {
  display: inline-block;
  border: 1px solid #eee;
  margin: 10px;
  box-shadow: 0 2px 2px #ccc;
  width:200px;
  padding:20px;
}

*/

var elementR = React.createElement("h1",{toWhat: 'World'},"Week Day");

var ulR = React.createElement("ul", null ,    React.createElement("li",null,"feed the cat"),                        React.createElement("li",null,"wash dishes"))

function DayWeek(props){
  return(
    <div className="day">
      {elementR}
      <h3>{props.day}</h3>
      <p>{props.japanese}</p>
      {ulR}
    </div>
  );
}

var app = (
  <div>
    <DayWeek day="Monday" japanese="月曜日"/>
    <DayWeek day="Tuesday" japanese="火曜日"/>
    <DayWeek day="Wednesday" japanese="水曜日"/>
    <DayWeek day="Thursday" japanese="木曜日"/>
    <DayWeek day="Friday" japanese="金曜日"/>
    <DayWeek day="Saturday" japanese="土曜日"/>
    <DayWeek day="Sunday" japanese="日曜日"/>
    
  </div>
);

ReactDOM.render(app,document.querySelector('#app'));
