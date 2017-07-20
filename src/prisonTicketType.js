/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonTicketType = {
  general: {
    name: '通用',
    value: 0
  },
  arraignment: {
    name: '提审',
    value: 0
  },
  meeting: {
    name: '会见',
    value: 0
  }
};

Object.freeze(prisonTicketType);
export default prisonTicketType;