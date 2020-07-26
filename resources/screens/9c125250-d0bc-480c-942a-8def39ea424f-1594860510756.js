jQuery("#simulation")
  .on("click", ".s-9c125250-d0bc-480c-942a-8def39ea424f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_8" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_12","#s-Dynamic_Panel_11","#s-Dynamic_Panel_3","#s-Dynamic_Panel_4","#s-Dynamic_Panel_7","#s-Dynamic_Panel_6","#s-Dynamic_Panel_10","#s-Dynamic_Panel_9","#s-Dynamic_Panel_5","#s-Dynamic_Panel_8" ],
                    "effect": {
                      "type": "puff",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_12","#s-Dynamic_Panel_11","#s-Dynamic_Panel_3","#s-Dynamic_Panel_4","#s-Dynamic_Panel_7","#s-Dynamic_Panel_6","#s-Dynamic_Panel_10","#s-Dynamic_Panel_9","#s-Dynamic_Panel_5","#s-Dynamic_Panel_8" ],
                    "effect": {
                      "type": "fold",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7028c585-5f39-4267-b02b-68f06b1ece6b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6766b09b-3986-45d5-8185-fdec322d89c9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e76e7b7c-d8dc-4f92-9c22-25faddc433f5",
                    "transition": {
                      "type": "slideandfade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/29deb89b-4318-45d0-b1db-f5fb821ef43a",
                    "transition": {
                      "type": "slideandfade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f04cfaf8-f5ea-4fef-a3a7-4542cd5f9295"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9c125250-d0bc-480c-942a-8def39ea424f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_11" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_12" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-9c125250-d0bc-480c-942a-8def39ea424f .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_8" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_11" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_12" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-9c125250-d0bc-480c-942a-8def39ea424f .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-9c125250-d0bc-480c-942a-8def39ea424f .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-9c125250-d0bc-480c-942a-8def39ea424f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-9c125250-d0bc-480c-942a-8def39ea424f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-menu_item1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-menu_item2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-9c125250-d0bc-480c-942a-8def39ea424f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Panel_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Panel_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_7").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_7") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-menu_item1","#s-menu_item2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-9c125250-d0bc-480c-942a-8def39ea424f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#434343"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_23 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F2F2F2"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#F2F2F2",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_1": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_1 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_1": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_1 span": {
                      "attributes": {
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_4": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_4 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_4": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_4 span": {
                      "attributes": {
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_7": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_7 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_7": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_7 span": {
                      "attributes": {
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_2": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_2 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_2": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_2 span": {
                      "attributes": {
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_9": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_9 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_9": {
                      "attributes": {
                        "line-height": "27px",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_9 span": {
                      "attributes": {
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_3": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_3 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_5": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_5 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Text_cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_28") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_28": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_29": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_30") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(242,242,242,0.3)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30": {
                      "attributes-ie": {
                        "-pie-background": "rgba(242,242,242,0.3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "1px 0px 8px 1px #999999"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30 > .backgroundLayer": {
                      "attributes": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  },{
                    "#s-9c125250-d0bc-480c-942a-8def39ea424f #s-Rectangle_30": {
                      "attributes-ie": {
                        "border-top-style": "solid",
                        "border-right-style": "solid",
                        "border-bottom-style": "solid",
                        "border-left-style": "solid"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-9c125250-d0bc-480c-942a-8def39ea424f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_30")) {
      jEvent.undoCases(jFirer);
    }
  });