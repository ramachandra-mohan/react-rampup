import OrgMasterData from '../data/org-master';
import * as CrewManagerActionTypes from '../actiontypes/crew-manager';

export default function CrewManager( state=OrgMasterData, action={} ) {

  switch(action.type) {

    case CrewManagerActionTypes.CREATE_CREW:

    const updatedCrewList = [
      ...state.nodes[action.groupsIndex].nodes[action.subgroupsIndex].nodes,
      { text: action.name }
    ];

    const updatedSubgroupList = state.nodes[action.groupsIndex].nodes.map( (node, index ) => {

          if( index === parseInt( action.subgroupsIndex, 10 ) ) {
            return {
              text: node.text,
              nodes: updatedCrewList
            }
          }
          return {nodes: node.nodes, text: node.text};
      })

    const orgMasters = state.nodes.map( (node, index) => {

      if( index === parseInt(action.groupsIndex, 10 ) ) {
        return {
          text: node.text,
          nodes: updatedSubgroupList
        };
      }
      return {nodes: node.nodes,text: node.text};
    });

    return {
      ...state,
      nodes: orgMasters
    };

    default :
    return state;
  }
}
