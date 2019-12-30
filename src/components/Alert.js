import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * Aler component
 */
const ContainerAlert = styled.div.attrs(props=>({
  /** props.type define type alert or validate */
  className: `${props.type === 'error' ? 'bg-red-100  border-red-400 text-red-700' : 'bg-green-100  border-green-400 text-green-700'} border  px-4 py-3 rounded relative`
}))``

export const Alert = (props) => {
  return (
    <ContainerAlert type={props.type} role="alert">
      <strong className="font-bold">{props.title}</strong>
      <span className="block sm:inline">{props.message}</span>
    </ContainerAlert>
  );
};
/**Define type Props */
Alert.propTypes ={
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}