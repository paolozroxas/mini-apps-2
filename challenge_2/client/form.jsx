import React from 'react';
import _ from 'underscore';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var fields = this.props.formMeta.fields;

    return (
      <div className='form'>
        <div className='title'>{this.props.formMeta.title}</div>
        <div className='fields'>
          {
            _.map(fields, (field, index) => {
              return (
                <div className='field' key={index}>
                  <div className='field-text'>{field.text}</div>
                  <div className='field-input'>
                    <input id={field.id} type='text' />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className='next-button' onClick={this.props.changeForm }>Next</div>
      </div>
    )
  }
}

export default Form;
