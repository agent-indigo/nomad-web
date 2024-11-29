import {Config} from 'tailwindcss'
import daisyui from 'daisyui'
const tailwindConfig: Config = {
  content: [
    '**/*.tsx'
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