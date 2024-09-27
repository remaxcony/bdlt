var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4566365607147205,
        "pitch": 0.016945471529041356,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.6171428518270634,
          "pitch": -0.07217028829898808,
          "rotation": 1.5707963267948966,
          "target": "3-pasillo"
        },
        {
          "yaw": -0.24330894047962914,
          "pitch": -0.060638376574152275,
          "rotation": 4.71238898038469,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln",
      "name": "SALÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.26304014319156543,
        "pitch": 0.02462463133980819,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.17275987073953836,
          "pitch": -0.0037151408825515375,
          "rotation": 0,
          "target": "2-terraza"
        },
        {
          "yaw": 3.0344193458624282,
          "pitch": -0.05491973762860347,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terraza",
      "name": "TERRAZA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8119827248853788,
        "pitch": 0.0724185876362391,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -2.951806917673105,
          "pitch": -0.07424880829183778,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -2.827320189275378,
          "pitch": 0.0969750784486969,
          "rotation": 1.5707963267948966,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7916019403595236,
        "pitch": 0.04924926267962704,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.7916019403595236,
          "pitch": 0.04924926267962704,
          "rotation": 1.5707963267948966,
          "target": "4-bao"
        },
        {
          "yaw": 0.4255464442709087,
          "pitch": 0.0019459132779306998,
          "rotation": 0.7853981633974483,
          "target": "5-cocina"
        },
        {
          "yaw": 0.21780669186352952,
          "pitch": -0.035983932270017505,
          "rotation": 0,
          "target": "6-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1153902514944285,
        "pitch": 0.08442730745076688,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.6773244570749455,
          "pitch": 0.039213516634482914,
          "rotation": 0.7853981633974483,
          "target": "5-cocina"
        },
        {
          "yaw": -1.832121767640924,
          "pitch": -0.07082975106229839,
          "rotation": 0,
          "target": "6-dormitorio"
        },
        {
          "yaw": 1.6486218331990177,
          "pitch": 0.01377906265486395,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15261291326679682,
        "pitch": 0.03517804477115405,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.6646843597674206,
          "pitch": 0.031803380441708384,
          "rotation": 1.5707963267948966,
          "target": "6-dormitorio"
        },
        {
          "yaw": 3.109606367116589,
          "pitch": 0.00028796947261966466,
          "rotation": 4.71238898038469,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dormitorio",
      "name": "DORMITORIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7878796741822818,
        "pitch": 0.08618620968931623,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 3.059459006830198,
          "pitch": 0.006437692020002217,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
