import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import RajBoldEot from './fonts/rajdhani/Rajdhani-Bold.eot';
import RajBoldSvg from './fonts/rajdhani/Rajdhani-Bold.svg';
import RajBoldTtf from './fonts/rajdhani/Rajdhani-Bold.ttf';
import RajBoldWoff from './fonts/rajdhani/Rajdhani-Bold.woff';
import RajBoldWoff2 from './fonts/rajdhani/Rajdhani-Bold.woff2';
import RajLightEot from './fonts/rajdhani/Rajdhani-Light.eot';
import RajLightSvg from './fonts/rajdhani/Rajdhani-Light.svg';
import RajLightTtf from './fonts/rajdhani/Rajdhani-Light.ttf';
import RajLightWoff from './fonts/rajdhani/Rajdhani-Light.woff';
import RajLightWoff2 from './fonts/rajdhani/Rajdhani-Light.woff2';
import RajMediumEot from './fonts/rajdhani/Rajdhani-Medium.eot';
import RajMediumSvg from './fonts/rajdhani/Rajdhani-Medium.svg';
import RajMediumTtf from './fonts/rajdhani/Rajdhani-Medium.ttf';
import RajMediumWoff from './fonts/rajdhani/Rajdhani-Medium.woff';
import RajMediumWoff2 from './fonts/rajdhani/Rajdhani-Medium.woff2';
import RajRegularEot from './fonts/rajdhani/Rajdhani-Regular.eot';
import RajRegularSvg from './fonts/rajdhani/Rajdhani-Regular.svg';
import RajRegularTtf from './fonts/rajdhani/Rajdhani-Regular.ttf';
import RajRegularWoff from './fonts/rajdhani/Rajdhani-Regular.woff';
import RajRegularWoff2 from './fonts/rajdhani/Rajdhani-Regular.woff2';
import RajRegularSemiBoldEot from './fonts/rajdhani/Rajdhani-SemiBold.eot';
import RajRegularSemiBoldSvg from './fonts/rajdhani/Rajdhani-SemiBold.svg';
import RajRegularSemiBoldTtf from './fonts/rajdhani/Rajdhani-SemiBold.ttf';
import RajRegularSemiBoldWoff from './fonts/rajdhani/Rajdhani-SemiBold.woff';
import RajRegularSemiBoldWoff2 from './fonts/rajdhani/Rajdhani-SemiBold.woff2';


export default createGlobalStyle`
${reset}

input{
  background-color:transparent;
  font-size: inherit;
  color:inherit;
  font-family: inherit;
  border: none;
  &:focus{
    outline: none;
  }
}

input::placeholder {color: #fff;}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

button{
  outline: none;
  border:none;
  color:inherit;
  font-size: inherit;
  cursor: pointer;
  background-color: transparent;
  font-family: inherit;
}

@font-face {
    font-family: 'Raj';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${RajLightEot});
    src: url(${RajLightEot}) format('embedded-opentype'),
      url(${RajLightWoff2}) format('woff2'),
      url(${RajLightWoff}) format('woff'),
      url(${RajLightTtf}) format('truetype'),
      url(${RajLightSvg}) format('svg');
    }


    @font-face {
        font-family: 'Raj';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(${RajRegularEot});
        src: url(${RajRegularEot}) format('embedded-opentype'),
          url(${RajRegularWoff2}) format('woff2'),
          url(${RajRegularWoff}) format('woff'),
          url(${RajRegularTtf}) format('truetype'),
          url(${RajRegularSvg}) format('svg');
        }
        
        @font-face {
            font-family: 'Raj';
            font-weight: 500;
            font-style: normal;
            font-display: swap;
            src: url(${RajMediumEot});
            src: url(${RajMediumEot}) format('embedded-opentype'),
              url(${RajMediumWoff2}) format('woff2'),
              url(${RajMediumWoff}) format('woff'),
              url(${RajMediumTtf}) format('truetype'),
              url(${RajMediumSvg}) format('svg');
            }



    @font-face {
            font-family: 'Raj';
            font-weight: 600;
            font-style: normal;
            font-display: swap;
            src: url(${RajRegularSemiBoldEot});
            src: url(${RajRegularSemiBoldEot}) format('embedded-opentype'),
              url(${RajRegularSemiBoldWoff2}) format('woff2'),
              url(${RajRegularSemiBoldWoff}) format('woff'),
              url(${RajRegularSemiBoldTtf}) format('truetype'),
              url(${RajRegularSemiBoldSvg}) format('svg');
    }    


    @font-face {
        font-family: 'Raj';
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url(${RajBoldEot});
        src: url(${RajBoldEot}) format('embedded-opentype'),
          url(${RajBoldWoff2}) format('woff2'),
          url(${RajBoldWoff}) format('woff'),
          url(${RajBoldTtf}) format('truetype'),
          url(${RajBoldSvg}) format('svg');
        }

`











