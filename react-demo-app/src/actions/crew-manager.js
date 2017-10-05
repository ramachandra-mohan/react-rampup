import * as CrewManagerActionTypes from '../actiontypes/crew-manager';

export const createCrew = (name, groupsIndex, subgroupsIndex) => {
  return {
    type: CrewManagerActionTypes.CREATE_CREW,
    name,
    groupsIndex,
    subgroupsIndex
  };
};
