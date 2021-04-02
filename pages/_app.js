import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import '../styles/custom.css'
import '../styles/font-icon.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
