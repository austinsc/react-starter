import React from "react";
import {TabbedArea, TabPane, Row, Col, Grid} from 'react-bootstrap';
import {Line} from "react-chartjs";

export default class TierList extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		let chartOptions = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
		return (
			<div>
				<h2>TierList</h2>
				  <TabbedArea defaultActiveKey={2}>
				    <TabPane eventKey={1} tab='Annie'>
				    <Grid>
				    	<Row>
				    		<Col md={4}> <h3>Hard Matchups</h3>
									<ul>
									  <li>Champ 1</li>
									  <li>Champ 2</li>
									  <li>Champ 3</li>
									</ul>
									</Col>
				    		<Col md={4}>
				    		<h3>Easy Matchups</h3>
									<ul> 
									  <li>Champ 1</li>
									  <li>Champ 2</li>
									  <li>Champ 3</li>
									</ul>
								</Col>
							<Col md={4}>
								<h3>Synergizes with:</h3>
								<ul>
									<li>Attr1</li>
									<li>Attr2</li>
									<li>Attr3</li>
								</ul>

						</Col>
				    	</Row>
				    	<Row>
				    		<Col md={12}>
								<h3>Explanation</h3>
								<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
							</Col>

				    	</Row>
				    	<Row>
				    		<Col md={12}>
								<h3>More Info</h3>
								<ul>
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
				    		</Col>
				    	</Row>

				    </Grid>
						<Line data={data} options={chartOptions} width="600" height="250"/>
				    </TabPane>
				    

				    <TabPane eventKey={2} tab='Ahri'><div className="circular icon-ahri"></div></TabPane>
				    <TabPane eventKey={3} tab='Akali' disabled={true}><div className="circular icon-akali"></div></TabPane>
				  </TabbedArea>				
			</div>

		);
	}
}
function randomData(N, max, long){
	return (
		Array.apply(null, Array(N || 5))
			.map(function(v){
				return {
					v: Math.floor(Math.random() * (max || 20)) + 1,
					label:""
				}
			}))
}