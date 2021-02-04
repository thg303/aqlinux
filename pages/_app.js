import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object
}

export default MyApp
