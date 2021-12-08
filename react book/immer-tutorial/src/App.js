import produce from 'immer';

const nextState=produce(originalState,draft=>{
  draft.somewhere.deep.inside=5;
})