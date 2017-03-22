import React, {PropTypes} from 'react';
import {
    FormattedMessage,
    FormattedNumber,
    FormattedRelative,
} from 'react-intl';


class Welcome extends React.Component {
  constructor(props) {
    super(props)
    let date = new Date()
    date.setYear( date.getFullYear() -2 )
    this.state = {
      name: "John Doe",
      date: date,
      works: "4",
    }
  }

  render() {
    return (
      <div>

        <FormattedMessage
          id="component-intl-welcome.your-name"
          defaultMessage="Your name"/>: &nbsp;
        <input type='text'
          value={this.state.name}
          onChange={(ev)=>this.setState({name:ev.target.value})}/> &nbsp;

        <FormattedMessage
          id="component-intl-welcome.work-began-year"
          defaultMessage="work began year"/>: &nbsp;
        <input type='number'
          value={this.state.date.getFullYear()}
          onChange={(ev)=>{
            let date = new Date(this.state.date)
            date.setYear(ev.target.value)
            this.setState({date:date})
          }}/> &nbsp;

        <FormattedMessage
          id="component-intl-welcome.number-of-works"
          defaultMessage="number of works"/>: &nbsp;
        <input type='number'
          value={this.state.works}
          onChange={(ev)=>this.setState({works:ev.target.value})}/> &nbsp;

        <br/><br/>

        <FormattedMessage
          id="component-intl-welcome.welcome-message"
          defaultMessage={`
            Welcome {name}, you have done {works, plural,
              =0 {no any work}
              one {{formattedWorksDone} great work}
              other {{formattedWorksDone} great works}
            } since {formattedWorkBegan}.
          `}
          values={{
            name: <b>{this.state.name}</b>,
            works: this.state.works,
            formattedWorksDone: (
              <b><FormattedNumber value={this.state.works}/></b>
            ),
            formattedWorkBegan: (
              <b><FormattedRelative units='year' value={this.state.date}/></b>
            ),
          }}
        />
      </div>
    )
  }
}

export default Welcome
