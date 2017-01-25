import React from 'react';
import InputArea from 'wix-style-react/InputArea';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
  verticalAlign: 'top'
};

const defaultProps = {
  size: 'normal',
  magnifyingGlass: true,
  placeholder: 'They did not know it was impossible, so they did it!',
  unit: '$'
};

export default () =>
  <div className="ltr">
    <div style={style}>
      Rows(5) & Max Height & min height<br/>
      <InputArea {...defaultProps} rows={5} maxHeight="120px" minHeight="50px"/><br/>
    </div>
    <div style={style}>
      Fixed Size<br/>
      <InputArea {...defaultProps} fixedSize/><br/>
    </div>
  </div>;
