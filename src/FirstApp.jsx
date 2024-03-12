import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Raul',
// };

// const getResult = (a, b) => {
//   return a + b;
// };

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);
  // if (!title) throw new Error('El titulo no existe');

  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <h1>{getResult(1, 2)}</h1> */}
      {/* <code>JSON.stringify(newMessage)</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Raul Huamani',
  subTitle: 'No hay subtitulo',
  // title: 'No hay titulo',
};
