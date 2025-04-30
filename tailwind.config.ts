import {Config} from 'tailwindcss'
import daisyui from 'daisyui'
const tailwindConfig: Config = {
  content: [
    'app/**/*.tsx',
    'components'
  ],
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      'winter',
      'night'
    ]
  }
}
export default tailwindConfig