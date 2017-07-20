/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';
let prisonerDispatchRequestStatus = {
  request: {
    name: '申请调监',
    value: 0
  },
  deny: {
    name: '拒绝调监',
    value: 1
  },
  dispatching: {
    name: '调监中',
    value: 2
  },
  done: {
    name: '调监完成',
    value: 3
  }
};

Object.freeze(prisonerDispatchRequestStatus);
export default prisonerDispatchRequestStatus;

