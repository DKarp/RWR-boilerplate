import './config/foundation_init.scss';
import './index.scss';

import './config/globals';
import 'foundation-sites';

import RWR from 'react-webpack-rails';

RWR.run();

import './router/router';

$(document).foundation();
