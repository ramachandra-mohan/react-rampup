const OrgMasterData = {
  text: 'root',
  nodes: [
      {
          text: 'Northern California',
          nodes: [
              {
                text: 'Central California Yard',
                nodes: [
                  {
                    text: 'Crew 1'
                  },
                  {
                    text: 'Crew 2'
                  },
                  {
                    text: 'Crew 3'
                  }
                ]
              },
              {
                text: 'San francisco Bay Area Yard',

                nodes: [
                  {
                    text: 'Crew 4'
                  }
                ]
              }
          ]
      },
      {
          text: 'South California',

          nodes: [
            {
              text: 'Los Angeles',

              nodes: [
                {
                  text: 'Crew 8'
                },
                {
                  text: 'Crew 9'
                },
                {
                  text: 'Crew 10'
                }
              ]
            },
            {
              text: 'San Diego',

              nodes: [
                {
                  text: 'Crew 13'
                },
                {
                  text: 'Crew 14'
                },
                {
                  text: 'Crew 15'
                },
                {
                  text: 'Crew 16'
                },
                {
                  text: 'Crew 17'
                }
              ]
            }
          ]
      },
  ]
};

export default OrgMasterData;
