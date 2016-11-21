import React from 'react';

import Session from './models/session';
import Bands from './collections/bands';
import Votes from './collections/votes';

export default {
  session: new Session(),
  bands: new Bands(),
  votes: new Votes()
}
