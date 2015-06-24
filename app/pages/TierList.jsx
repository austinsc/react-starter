import React from "react";
import {TabbedArea, TabPane, Row, Col, Grid} from 'react-bootstrap';

export default class TierList extends React.Component {
	static getProps() {
		return {};
	}
	render() {
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
				    </TabPane>
				    

				    <TabPane eventKey={2} tab='Ahri'><div className="circular icon-ahri"></div></TabPane>
				    <TabPane eventKey={3} tab='Akali' disabled={true}><div className="circular icon-akali"></div></TabPane>
				  </TabbedArea>				
			</div>
		);
	}
}
