import React from 'react';
import _ from 'underscore';

var Confirmation = (props) => {
  var forms = props.formMeta;

  return (
    <div className='confirmation'>
      <div className='confirmation-fields'>
        {
          _.map(forms, (form, index) => {
            var fields = form.fields;
            return _.map(fields, (field, index) => {
              return (
                <div className='field' key={index}>
                  <div className='field-text'>{field.text}</div>
                  <div className='field-value'>
                    {field.value}
                  </div>
                </div>
              );
            });
          })
        }
      </div>
      <div className='purchase-button'>Purchase</div>
    </div>
  )
}

export default Confirmation;
