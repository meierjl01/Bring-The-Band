import React from 'react';

import Session from './models/session';
import Bands from './collections/bands';

export default {
  session: new Session(),
  bands: new Bands()
}
