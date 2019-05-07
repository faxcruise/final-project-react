import React, { Component } from 'react';
import Text from '../atom/Text';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class Section extends React.Component {
    render() {
        return (
            <div>
                <Card style={{
                    textAlign: 'left',
                    margin:20,
                    
                }}>
                    <CardContent>
                        <Text variant = 'title' gutterBottom>{this.props.title}</Text>
                        {this.props.children}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Section;